import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import alias from '@rollup/plugin-alias'
import path from 'path'

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'cat-ui',
			file: './dist/cat-ui.csj.js',
			format: 'cjs'
		},
		plugins: [
			alias({
				entries: [
					{ find: '@', replacement: path.resolve(__dirname, 'src') },
				]
			}),
			resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
			vue(),
			scss({
				prefix: `@import "./src/style/global.scss";`
			}),
		]
	},
	{
		input: 'src/main.js',
		output: {
			name: 'cat-ui',
			file: './dist/cat-ui.esm.js',
			format: 'esm'
		},
		plugins: [
			alias({
				entries: [
					{ find: '@', replacement: path.resolve(__dirname, 'src') },
				]
			}),
			resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
			vue(),
			scss({
				prefix: `@import "./src/style/global.scss";`
			}),
		]
	},
];
