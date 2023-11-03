'use strict'
const fs = require('fs')
const path = require('path')

function filtered_ls(dir, ext, callback) {

    fs.readdir(dir, (err, list) => {
        if (err) {
            callback(err)
            return
        }
        list = list.filter((file) => {
            return path.extname(file) === '.' + ext
        })
        callback(null, list)
    })

}

module.exports = filtered_ls
