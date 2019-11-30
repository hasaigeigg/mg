const proxy = require('http-proxy-middleware');

module.exports = (app) =>{
    app.use('/api',proxy({
        target:"http://cmsjapi.ffquan.cn",
        changeOrigin:true,
        // pathRewrite:{
        //     '^/ajax':''
        // }
    }))
}