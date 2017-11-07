const fs = require('fs')
const path = require('path')

const func = process.argv[2]

const ext = '.' + process.argv[3]

fs.readdir(func, function (errors, files){
    if (errors) return console .error(errors)
    files.forEach(function (rav){
     if(path.extname(rav) === ext){
         console.log(rav)
     }  
    })
})