'use strict'
const http = require('http')
const bl = require('bl')

let sum = 0
const args = process.argv.slice(2)
function customGet (url, index, results) {
    http.get(url, (response) => {
        response.pipe(bl((err, data) => {
            if (err) {console.error(err)}
            results[index] = data.toString()
            sum +=1
            if(sum == 3) {
                results.forEach( r => console.log(r)) 
            }
        }))
    })
}

args.forEach(customGet)
