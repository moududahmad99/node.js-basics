const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  

  if (req.url === '/') {
    res.end('<h1>Home Page, <p>\nNote: Only <a href="/contact">contact</a> page available</p></h1>')

  } else if (req.url === '/contact') {
    res.end('<h1>01619863686</h1>')
  } else {
    res.end('Invalid URL.')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})