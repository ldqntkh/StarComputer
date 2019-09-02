/*
    ./webpack.config.js
*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
    devtool: "source-map",
    mode: 'production',
    entry: {
        'wp-content/themes/online-shop-child/assets/js/app' : './wp-content/themes/online-shop-child/private/javascripts/app.js',
        'wp-content/themes/online-shop-child/assets/js/sliderPage' : './wp-content/themes/online-shop-child/private/javascripts/sliderPage.js',
        "custom-style" : "./wp-content/themes/online-shop-child/private/scss/style.scss",
        "wp-content/themes/online-shop-child/assets/js/bundle" : "./wp-content/themes/online-shop-child/private/reactSrc/App.js",
        // "wp-content/themes/online-shop-child/assets/js/build-pc" : "./wp-content/plugins/woocommerce-build-pc/private/reactjs/App.js",
        // "wp-content/themes/online-shop-child/assets/js/primetime" : "./wp-content/plugins/woocommerce-hotdeal/assets/reactjs/App.js",
        "wp-content/plugins/woocommerce-build-pc/assets/js/build-pc-bm" : "./wp-content/plugins/woocommerce-build-pc/private/reactjsBM/App.js",
    },
    output: {
        // path: path.resolve('wp-content/themes/online-shop-child/assets/js'),
        path: path.resolve(__dirname),
        filename: '[name].js'
    },
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
                use: "babel-loader",
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
        new ExtractTextPlugin({ filename: './wp-content/themes/online-shop-child/[name].css', disable: false, allChunks: false })
    ]
}