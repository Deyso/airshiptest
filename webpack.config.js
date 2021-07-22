const path = require('path')
module.exports = {
	devServer: {
		disableHostCheck: true
	},
	entry: {
		main: './src/index.js',
		sw: './src/sw.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'docs')
	}
}
