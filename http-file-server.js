'use strict'
const http = require('http')
const fs = require('fs')
const port = process.argv[2]
const filePath = process.argv[3]

server = http.createServer((request, response) => {
    fileStream = fs.createReadStream(filePath) 
    fileStream.pipe(response)
})
server.listen(port)
