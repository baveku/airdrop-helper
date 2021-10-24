const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const resolveTsconfigPathsToAlias = require('./resolve-tsconfig-path-to-webpack-alias');
module.exports = {
	resolve: {
		alias: resolveTsconfigPathsToAlias({ tsconfigPath: __dirname + "/../tsconfig.json", webpackConfigBasePath: __dirname + '/../' }),
		extensions: ['.ts', '.tsx', '.js'],
	},
	entry: './electron/main.ts',
	module: {
		rules: require('./rules.webpack'),
	}
}