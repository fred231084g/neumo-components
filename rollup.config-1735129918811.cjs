'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('@rollup/plugin-node-resolve');
var postcss = require('rollup-plugin-postcss');
var terser = require('@rollup/plugin-terser');
var typescript = require('@rollup/plugin-typescript');
var commonjs = require('@rollup/plugin-commonjs');

// External dependencies configuration
const external = [
  'lit',
  'lit/decorators.js',
  '@lit/reactive-element',
  'lit-html',
  'lit-element/lit-element.js',
  /^@lit-labs\//
];

// Shared PostCSS config
const postcssConfig = {
  syntax: require('postcss-scss'),
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': true
      }
    }),
    require('autoprefixer')({
      grid: true
    }),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true
        },
        calc: false
      }]
    })
  ]
};

// Shared SASS config
const sassConfig = {
  implementation: require('sass'),
  sassOptions: {
    includePaths: ['src/styles'],
    outputStyle: 'compressed'
  }
};

// Shared PostCSS plugin config
const getPostcssPlugin = (extractPath) => postcss({
  extract: extractPath,
  modules: false,
  autoModules: false,
  minimize: true,
  syntax: postcssConfig.syntax,
  plugins: postcssConfig.plugins,
  use: {
    sass: sassConfig
  }
});

// Shared plugins configuration
const getBasePlugins = (outDir) => [
  resolve({
    browser: true,
    preferBuiltins: false,
    extensions: ['.js', '.ts', '.scss'],
    mainFields: ['module', 'main']
  }),
  commonjs({
    include: 'node_modules/**',
    requireReturnsDefault: 'auto'
  }),
  typescript({
    tsconfig: './tsconfig.json',
    sourceMap: true,
    outDir,
    declaration: true,
    declarationDir: outDir
  }),
  terser({
    format: {
      comments: false
    }
  })
];

var rollup_config = [
  // ESM build
  {
    input: 'src/components/index.ts',
    output: {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    external,
    plugins: [
      ...getBasePlugins('./dist/esm'),
      getPostcssPlugin('dist/esm/styles.css')
    ]
  },
  // CJS build
  {
    input: 'src/components/index.ts',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true
    },
    external,
    plugins: [
      ...getBasePlugins('./dist/cjs'),
      getPostcssPlugin('dist/cjs/styles.css')
    ]
  },
  // UMD build
  {
    input: 'src/components/index.ts',
    output: {
      file: 'dist/umd/index.js',
      format: 'umd',
      name: 'NeumoComponents',
      sourcemap: true,
      globals: {
        'lit': 'Lit',
        'lit/decorators.js': 'LitDecorators',
        '@lit/reactive-element': 'LitReactiveElement',
        'lit-html': 'LitHtml',
        'lit-element/lit-element.js': 'LitElement'
      }
    },
    external,
    plugins: [
      ...getBasePlugins('./dist/umd'),
      getPostcssPlugin('dist/umd/styles.css')
    ]
  },
  // CSS build
  {
    input: 'src/styles/index.scss',
    output: {
      file: 'dist/css/index.css',
      format: 'es'
    },
    plugins: [
      resolve({
        extensions: ['.scss']
      }),
      getPostcssPlugin('dist/css/index.css')
    ]
  }
];

exports.default = rollup_config;
