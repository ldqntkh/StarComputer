/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
    entry: {
        react_primetime: './widget/homepage-widget/assets/private/js/client/reactjs/App.js'
    },
    output: {
        path: path.resolve('widget/homepage-widget/assets/js/reactjs'),
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