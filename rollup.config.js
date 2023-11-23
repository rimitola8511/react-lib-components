import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

//NEW
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

export default [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.main,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      // NEW
      typescript(),
      peerDepsExternal(),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),

      resolve(),
      commonjs(),

      // NEW
      terser(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
    jest: {
      preset: 'rollup-jest',
    },
    jest: {
      transform: {
        '\\.m?js$': 'rollup-jest',
      },
    },
  },
];
