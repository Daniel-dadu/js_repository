const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') { // localhost:5000
    res.end('Welcome to our home page')
  } else if (req.url === '/about') { // localhost:5000/about
    res.end('Here is our short history')
  } else { // localhost:5000/anythingElse
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000) // localhost:5000