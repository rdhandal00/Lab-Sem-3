const fs = require('fs')

const system = process.argv[2]

fs.readFile(system, function (err, contents){
    if (err){
        return console.log(err)
    }
    const process = contents.toString().split('\n').length - 1
    console.log(process)
}
)