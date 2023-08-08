const http = require('http')

http.createServer((req, res) => {

    if (req.url === '/quote' || req.url === '/') {
        res.end('<h1>Life is a race.</h1>')
    } else {
        res.end('Error')
    }
}).listen(3000)