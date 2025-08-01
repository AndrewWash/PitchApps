import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'SimpleSpeed'
  },
  plugins: [
    nodeResolve()
  ]
};