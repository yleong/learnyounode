const net = require('net')
const strftime = require('strftime')
const port = process.argv[2]

function handler(socket) {
    const data = strftime("%Y-%m-%d %H:%M") + '\n'
    socket.end(data)
}
const server = net.createServer(handler)
server.listen(port)

