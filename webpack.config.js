const path = require('path')
let name = 'push-worker'
module.exports = {
	devServer: {
		disableHostCheck: true
	},
	entry: {
		main: './src/index.js',
		'push-worker': './src/push-worker.js',
		// airship: './src/airship.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'docs')
	}
}
