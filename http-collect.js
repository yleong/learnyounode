'use strict'
const http = require('http')
const bl = require('bl')
const url = process.argv[2]

function solution1 (response) {
    let output = ""
    response.setEncoding('utf8')

    response.on('error', console.error) 
    response.on('data', (data) => {
        //console.log("got:" + data)
        output += data
        //console.log("output:" + output)

    }) 
    response.on('end', () => {
        console.log(output.length)
        console.log(output)
    })
}

function solution2 (response) {
    response.pipe(bl((err, data) => {
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
}
//http.get(url, solution1)
http.get(url, solution2)
