/*
    ./webpack.config.js
*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");


module.exports = {
    entry: {
        "client_appjs" : './private/js/client/app.js',
        "client_style" : './private/scss/client/style.scss',
        // waiting for reactjs
        "admin_appjs" : './private/js/admin/app.js',
        "admin_style" : './private/scss/admin/style.scss'
    },
    output: {
        path: path.resolve('wwwroot/js'),
        filename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [{
                test: /.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader?url=false'
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
            } , 
            { 
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name : './[path][name].[ext]',
                        emitFile: false
                    }
                }]
            }
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new ExtractTextPlugin({ filename: '../../wwwroot/css/[name].css', disable: false, allChunks: false })
    ]
}