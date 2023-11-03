"use strict"

const fs = require('fs')

let infile = process.argv[2]
let contents = fs.readFileSync(infile).toString()
console.log(contents.split('\n').length - 1)
