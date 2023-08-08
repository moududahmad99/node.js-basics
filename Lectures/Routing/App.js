const http = require('http')
const fs = require('fs')
const { log } = require('console')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {

    const handleReadFile = (fileName, statusCode) => {
        fs.readFile(fileName, (error, data) => {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }

    if (req.url === '/') {
        handleReadFile('views/Home.html', 202)
    } else if (req.url === '/about') {
        handleReadFile('views/About.html', 202)       
    } else if (req.url === '/portfolio') {
        handleReadFile('views/Portfolio.html', 202)       
    } else if (req.url === '/contact') {
        handleReadFile('views/Contact.html', 202)       
    } else {
        handleReadFile('views/Error.html', 404)       
    }
})

server.listen(port, hostname, () => {
    log(`Server runninga at http://${hostname}:${port}`);
})