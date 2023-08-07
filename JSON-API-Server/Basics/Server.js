const http = require('http');

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/items' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')

        const items = [
            { id: 1, name: 'Sabbir' },
            { id: 2, name: 'Jilany' },
            { id: 3, name: 'Hamid' }
        ]
        res.end(JSON.stringify(items))

    } else if (req.url === '/') {
        res.end('<h1>This is Home Page. kindly go to <a href="/items">ITEMS</a> </h1>')
    }
    else {
        res.statusCode = 404
        res.end('Server Not Found')
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})