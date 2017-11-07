const fs = require('fs')
const path = require('path')

module.exports = function (file, filterStr, callback){
    fs.readdir(file, function(err,data){
        if(err){
            return callback(err)
        }
        data = data.filter(function(file){
            return path.extname(file) === '.' + filterStr
        })
        callback(null,data)
    })
}