/* eslint-disable global-require */

module.exports = webpack => ({
	plugins: [
		require('postcss-smart-import')(),
		require('postcss-cssnext')()
	]
});
