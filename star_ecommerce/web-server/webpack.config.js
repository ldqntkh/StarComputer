/*
    ./webpack.config.js
*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
    entry: {
        admin_control_arduino: './private/controlArduino/reactjs/App.js',
        admin_style_arduino: ['./private/controlArduino/scss/style.scss']
    },
    
    mode: 'development',
    module: {
        rules: [{
                test: /.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                camelCase: 'dashes',
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new ExtractTextPlugin({ filename: '../../stylesheets/[name].css', disable: false, allChunks: false })
    ],
    output: {
        path: path.resolve('public/js/reactjs'),
        filename: '[name].js'
    },
}

class RemoveRedundantFileJS {

}