const isDev = process.env.NODE_ENV === 'development';

module.exports =  isDev ? require('./webpack.dev') : require('./webpack.prod');
