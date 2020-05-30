const path = require('path')

module.exports = {
    mode: 'production',
    entry: './index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}
