import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { visualizer } from 'rollup-plugin-visualizer';

export default [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
        paths: {
          'lit': './node_modules/lit/index.js',
          'lit/decorators.js': './node_modules/lit/decorators.js'
        }
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
        paths: {
          'lit': './node_modules/lit/index.js',
          'lit/decorators.js': './node_modules/lit/decorators.js'
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
        mainFields: ['module', 'main']
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/types'
      }),
      postcss({
        extract: 'styles.css',
        modules: false,
        autoModules: false,
        minimize: true,
        syntax: require('postcss-scss'),
        use: {
          sass: {
            implementation: require('sass'),
            includePaths: ['src/styles']
          }
        },
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
        syntax: require('postcss-scss'),
        use: {
          sass: {
            implementation: require('sass'),
            includePaths: ['src/styles']
          }
        },
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
      })
    ]
  }
];