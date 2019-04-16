const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api/email', { target: 'http://localhost:8880/'}))
}

//'http://ec2-3-85-29-183.compute-1.amazonaws.com/'