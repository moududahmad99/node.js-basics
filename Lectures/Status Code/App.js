const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    
    res.writeHead(203, 'Content-Type', 'text/html')
    res.write("<h1>right click and inspect, and go to network then check status code. (localhost) </h1>")
    res.end()

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})