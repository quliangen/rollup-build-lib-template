import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import jsx from 'acorn-jsx';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  acornInjectPlugins: [jsx()],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  output: [
    { format: 'cjs', file: pkg.main, sourcemap: true },
    { format: 'esm', file: pkg.module, sourcemap: true }
  ]
};
