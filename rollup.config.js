import typescript from 'rollup-plugin-typescript'
export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'lunar'
  },
  plugins: [
    typescript({lib: ["es5", "es6", "dom"], target: "es5"})
  ]
}