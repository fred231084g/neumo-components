import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import sass from 'sass';

export default [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'NeumoComponents',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.ts'], // Add '.ts' for TypeScript
      }),      postcss({
        extract: 'dist/styles.css',
        minimize: true,
        syntax: require('postcss-scss'), // Ensure SCSS syntax is recognized
        use: [
          [
            'sass',
            {
              implementation: sass, // Explicitly use `sass`
            },
          ],
        ],
        plugins: [
          require('postcss-import'),
          require('postcss-preset-env')({ stage: 1 }),
          require('autoprefixer'),
          require('cssnano')({ preset: 'default' }),
        ],
      }),
      terser(), // Minify JavaScript output
    ],
  },
];
