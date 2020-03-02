const path = require('path');

module.exports = {
	entry: '../demo/walk/Walk.js',
	output: {
		filename: 'app.js',
		path: path.resolve("../demo/walk")
	}
}