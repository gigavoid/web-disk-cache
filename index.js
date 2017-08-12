const http = require('http')

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('web-disk-cache')
  res.end()
})

const port = process.env.PORT || 8080
console.log(`Listening on port ${port}`)

app.listen(port)
