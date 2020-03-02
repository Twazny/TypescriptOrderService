const path = require('path');
module.exports = {
    entry: {
        index: './client/src/index.ts',
        sw: './client/src/service-worker.ts'
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts','.tsx','.css']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            }
        ]
    }
}