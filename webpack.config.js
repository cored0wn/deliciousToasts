const path = require('path');
const webpack = require('webpack');


const DIST_DIR = 'build';

module.exports = {

  entry: './src/index.js',

	output: {
        path: path.resolve(__dirname, DIST_DIR),
        filename: "index.js",
        libraryTarget: 'commonjs2'
	},

	plugins: [
	        new webpack.NamedModulesPlugin(),
    			new webpack.optimize.ModuleConcatenationPlugin(),
    	        new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
	],

  module: {
      rules: [
          {
              test: /\.js$/,
			        include: path.resolve(__dirname, 'src'),
              exclude: ["/node_modules/", "/build/"],
			        use: [{loader: "babel-loader"}, {loader: "eslint-loader"}],
          }
      ]
  },

	externals: {
		'react': 'commonjs react'
	}

};
