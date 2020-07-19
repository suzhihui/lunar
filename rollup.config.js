import typescript from 'rollup-plugin-typescript'
import { uglify } from "rollup-plugin-uglify"
export default {
  input: 'src/calendar.ts',
  output: {
    file: 'dist/calendar.min.js',
    format: 'umd',
    name: 'lunar'
  },
  plugins: [
    typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
    uglify()
  ]
}