const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {enforce: "pre", test: /\.jsx?$/,exclude: '/node_modules/'},
            {test: /\.jsx?$/, use: 'babel-loader'},
            {test:/\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })],
    mode: "development"
}