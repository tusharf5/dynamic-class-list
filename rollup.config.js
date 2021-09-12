import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';

import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      del({ targets: 'dist/*', runOnce: true }),
      typescript({
        typescript: require('typescript'),
      }),
    ],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
        plugins: [terser({ compress: true, mangle: true, format: { comments: false } })],
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        plugins: [terser({ compress: true, mangle: true, format: { comments: false } })],
      },
    ],
  },
  {
    // path to your declaration files root
    input: './dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
