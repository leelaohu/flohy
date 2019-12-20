const path = require('path')
module.exports = {
    pluginOptions: {
            'style-resources-loader': {
                preProcessor: 'scss',
                patterns: [
                    path.resolve(__dirname, './src/styles/*.scss'),
                ]
            }
        },
    devServer: {
        port: 8080,
        proxy: {
            '/flohy': {
                target: 'http://m.flohy.com',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/flohy': ''
                }
            },
        }
    }
}
