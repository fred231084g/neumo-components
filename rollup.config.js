import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
// import { visualizer } from 'rollup-plugin-visualizer';

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
  implementation: require('sass').default,
  includePaths: ['src/styles']
};

export default [
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
        sourceMap: true,
        outDir: './dist/esm',
        declaration: true,
        declarationDir: './dist/esm/'
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
      })
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
    external: ['lit', 'lit/decorators.js'],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false,
        extensions: ['.js', '.ts', '.scss']
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        outDir: './dist/cjs',
        declaration: true,
        declarationDir: './dist/cjs'
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
      terser()
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
        'lit/decorators.js': 'LitDecorators'
      }
    },
    external: ['lit', 'lit/decorators.js'],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false,
        extensions: ['.js', '.ts', '.scss']
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        outDir: './dist/umd',
        declaration: true,
        declarationDir: './dist/umd/'
      }),
      terser()
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