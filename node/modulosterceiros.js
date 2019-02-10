const http = require('http')

http.createServer((req, res) => {
    res.write('Hello Word')
    res.end()
}).listen(8081)