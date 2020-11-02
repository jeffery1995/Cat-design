import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue'

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'cat-ui',
			file: './dist/bundle.js',
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      vue(),
		]
	},
];
