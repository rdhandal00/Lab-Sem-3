const filterFn = require('./Lab6.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function(err, data){
    if(err){
        return console.error('This is the main part:', err)
    }
    
    data.forEach(function(rav) {
        console.log(rav)
    })
})