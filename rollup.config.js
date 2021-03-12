import postcss from 'rollup-plugin-postcss';
import terser  from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import svg from 'rollup-plugin-svg';
import path from 'path';


const dev = process.env.NODE_ENV !== 'production';

export default {
  input: 'src/scripts/main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'main',
    file: 'dist/assets/main.bundle.js'
  },
  plugins: [
    resolve(),
    replace({
      DEV_MODE: dev
    }),
    svg(),
    postcss({
      extract: path.resolve('dist/assets/main.bundle.css'),
      minimize: !dev
    }),
    !dev && terser()
  ],
  watch: {
    clearScreen: false
  },
  onwarn(warning) {
    // Skip certain warnings
    // specifically because Apine throws up a —— (!) `this` has been rewritten to `undefined` —— error
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return
    }

    // console.warn everything else
    console.warn(warning.message)
  },
};