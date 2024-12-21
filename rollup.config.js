import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

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
        file: 'dist/index.cjs',
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
        extensions: ['.js', '.ts'],
      }),
      typescript({
        tsconfig: './tsconfig.json', // Ensure correct tsconfig is used
      }),
      postcss({
        extract: 'dist/styles.css',
        minimize: true,
        syntax: require('postcss-scss'),
        use: [
          [
            'sass',
            {
              implementation: require('sass'),
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
      terser(),
    ],
  },
];
