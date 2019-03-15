//网络代理配置文件
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: "http://localhost:3001",
            pathRewrite: {
                '^/api': '' //重写代理的路径，如http://localhost:8888/api/login会被代理到"http://localhost:3001/login
            }
        })
    );
};
