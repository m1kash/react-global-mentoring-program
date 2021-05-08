const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
        contentBase: './dist',
        port: 9000,
        historyApiFallback: true,
        inline:true,
        stats: 'errors-only',
        hot: true
    },
});
