/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
    entry: {
        app: './wp-content/themes/online-shop-child/private/javascripts/app.js',
    },
    output: {
        path: path.resolve('wp-content/themes/online-shop-child/assets/js'),
        filename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
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
    }
}