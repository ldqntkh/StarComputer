/*
    ./webpack.config.js
*/
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: {
        'wp-content/themes/online-shop-child/assets/js/app' : './wp-content/themes/online-shop-child/private/javascripts/app.js',
        'wp-content/themes/online-shop-child/assets/js/sliderPage' : './wp-content/themes/online-shop-child/private/javascripts/sliderPage.js',
        "wp-content/themes/online-shop-child/custom-style" : "./wp-content/themes/online-shop-child/private/scss/style.scss",
        "wp-content/themes/online-shop-child/assets/js/bundle" : "./wp-content/themes/online-shop-child/private/reactSrc/App.js",
        // "wp-content/themes/online-shop-child/assets/js/build-pc" : "./wp-content/plugins/woocommerce-build-pc/private/reactjs/App.js",
        // "wp-content/themes/online-shop-child/assets/js/primetime" : "./wp-content/plugins/woocommerce-hotdeal/assets/reactjs/App.js",
        "wp-content/plugins/woocommerce-build-pc/assets/js/build-pc-bm" : "./wp-content/plugins/woocommerce-build-pc/private/reactjsBM/App.js",

        'wp-content/plugins/sale-installment/assets/css/star-brands': './wp-content/plugins/sale-installment/private/scss/style.scss',
        'wp-content/plugins/sale-installment/assets/js/star-app': './wp-content/plugins/sale-installment/private/javascripts/app.js',
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js'
    },
    mode: devMode ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './[path][name].[ext]',
                        emitFile: false
                    }
                }]
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            // online theme
            { from: './wp-content/themes/online-shop-child/private/assets', to: './wp-content/themes/online-shop-child/assets' },
        ]),
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            // online theme
            // filename: devMode ? './wp-content/themes/online-shop-child/assets/styles/[name].css' : './wp-content/themes/online-shop-child/[name].[hash].css',
            // chunkFilename: devMode ? './wp-content/themes/online-shop-child/assets/styles/[id].css' : './wp-content/themes/online-shop-child/[id].[hash].css'

            // electro theme
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        })
    ],
    devtool: devMode ? 'inline-source-map' : false,
}