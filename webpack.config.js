var webpack = require('webpack');
var config = {
    entry: {
        'index': "./index.js"
    },
    output: {
        //publicPath: './assets/js',
        path: '/assets/js/',
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    devServer: {
        inline: true,
        port: 4012,
        hot: true
    },
    externals: {
        //'react':'React',
        //'react-dom':'ReactDOM',
        //'jquery':"$",
        // 'iscroll':'IScroll'
    },
    module: {
        loaders: [{
            test: /\.vue|\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }, {
            test: /\.(css)$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },

}

module.exports = config;