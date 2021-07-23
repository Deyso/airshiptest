const path = require('path')
let name = 'push-worker'
module.exports = {
	devServer: {
		https: true,
		disableHostCheck: true,
		public: '0.0.0.0',
		port: 443,
		host: 'local.performgroup.com'
	},
	entry: {
		main: './src/index.js',
		'push-worker': './src/push-worker.js',
		// sw: './src/sw.js',
		airship: './src/airship.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'docs')
	}
}
