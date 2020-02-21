// rollup.config.js
const babel = require('rollup-plugin-babel')
const postcss = require('rollup-plugin-postcss')
const { terser } = require('rollup-plugin-terser')
const fileSize = require('rollup-plugin-filesize')

export default {
  input: 'src/avatar.jsx',
  output: [
    {
      file: 'lib/avatar.mjs',
      format: 'esm',
      globals: {
        react: 'React',
      }
    },
    {
      file: 'lib/avatar.js',
      format: 'cjs',
      globals: {
        react: 'React',
      }
    },
    {
      file: 'lib/avatar.umd.js',
      format: 'umd',
      name: 'avatar',
      globals: {
        react: 'React',
      }
    }
  ],
  external: ['react'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
          // Specify the paths to all of the template files in your project 
          content: [
            './src/**/*.jsx',
          ],
          // Include any special characters you're using in this regular expression
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
        require('cssnano')({
          preset: 'default',
        })
      ],
    }),
    terser(),
    fileSize()
  ]
}
