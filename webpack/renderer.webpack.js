const resolveTsconfigPathsToAlias = require('./resolve-tsconfig-path-to-webpack-alias');
module.exports = {
	resolve: {
		alias: resolveTsconfigPathsToAlias({ tsconfigPath: __dirname + "/../tsconfig.json", webpackConfigBasePath: __dirname + '/../' }),
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: require('./rules.webpack'),
	},
}