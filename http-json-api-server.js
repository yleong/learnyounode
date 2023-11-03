'use strict'
const http = require('http')
const url = require('url')
const port = process.argv[2]

const server = http.createServer((request, response) =>{
    const parsedurl = url.parse(request.url, true)
    const iso = parsedurl.query.iso
    const date = new Date(iso)
    let result = {}
    if (parsedurl.pathname === "/api/parsetime") {
        result.hour = date.getHours()
        result.minute = date.getMinutes()
        result.second = date.getSeconds()
    }
    else if (parsedurl.pathname === "/api/unixtime") {
        result.unixtime = date.getTime()
    }
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(result))
})
server.listen(port)
