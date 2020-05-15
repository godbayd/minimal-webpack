const path = require('path')
const hwp = require('html-webpack-plugin')
const lrp = require('webpack-livereload-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new hwp({
            template: './src/index.html'
        }),
        new lrp({
            port: 8080
        })
    ]
}
