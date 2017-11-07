const http = require('http')
const rav = require('bl')

http.get(process.argv[2], function(response){
    response.pipe(rav(function (errors, data){
    if(errors){
        return console.error(errors)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
   }))
})