import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { visualizer } from 'rollup-plugin-visualizer';

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
  includePaths: ['src/styles']
};

export default [
  // Main component build
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
        preserveModules: true,
        paths: {
          'lit': '/node_modules/lit/index.js',
          'lit/decorators.js': '/node_modules/lit/decorators.js'
        }
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
        paths: {
          'lit': '/node_modules/lit/index.js',
          'lit/decorators.js': '/node_modules/lit/decorators.js'
        }
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'NeumoComponents',
        sourcemap: true,
        globals: {
          'lit': 'Lit',
          'lit/decorators.js': 'LitDecorators'
        }
      }
    ],
    external: ['lit', 'lit/decorators.js'],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false,
        extensions: ['.js', '.ts', '.scss'],
        mainFields: ['module', 'main'],
        dedupe: ['lit']
      }),
      commonjs({
        include: 'node_modules/**',
        requireReturnsDefault: 'auto'
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/types',
        sourceMap: true
      }),
      postcss({
        extract: 'styles.css',
        modules: false,
        autoModules: false,
        minimize: true,
        syntax: postcssConfig.syntax,
        plugins: postcssConfig.plugins,
        use: {
          sass: sassConfig
        }
      }),
      terser({
        format: {
          comments: false
        }
      }),
      visualizer({
        filename: 'bundle-analysis.html'
      })
    ]
  },
  // Separate CSS build
  {
    input: 'src/styles/index.scss',
    output: {
      file: 'dist/index.css',
      format: 'es'
    },
    plugins: [
      postcss({
        extract: true,
        modules: false,
        autoModules: false,
        minimize: true,
        syntax: postcssConfig.syntax,
        plugins: postcssConfig.plugins,
        use: {
          sass: sassConfig
        }
      })
    ]
  }
];