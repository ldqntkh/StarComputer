/*
    ./webpack.config.js
*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");


module.exports = {
    entry: {
        app: './wp-content/themes/online-shop-child/private/javascripts/app.js',
        "custom-style" : "./wp-content/themes/online-shop-child/private/scss/style.scss"
    },
    output: {
        path: path.resolve('wp-content/themes/online-shop-child/assets/js'),
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
                            loader: 'css-loader?url=false',
                            // options: {
                            //     modules: true,
                            //     camelCase: 'dashes',
                            //     minimize: true
                            // }
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
        new ExtractTextPlugin({ filename: '../../../../../wp-content/themes/online-shop-child/[name].css', disable: false, allChunks: false })
    ]
}