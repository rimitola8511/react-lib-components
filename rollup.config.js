import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import svgr from '@svgr/rollup';
import del from 'rollup-plugin-delete';
import external from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    external(),
    image(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    del({ targets: ['dist/*'] }),
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
};
