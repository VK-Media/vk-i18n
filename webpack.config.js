module.exports = {
    mode: 'production',
    entry: 'index.ts',
    output: {
        filename: 'index.js'
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
