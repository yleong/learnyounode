'use strict'

const fs = require('fs')
let infile = process.argv[2]

fs.readFile(infile, (err, data) => {
    if (! err) {
        let result = data.toString().split('\n').length - 1
        console.log(result)
    }
}) //async method
