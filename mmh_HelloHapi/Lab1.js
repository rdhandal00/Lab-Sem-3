let hapi=require('hapi')
let server=hapi.Server()
  server.connection({
host:'localhost',
   port:Number(process.argv[2] || 8080)
})

server.route({path: '/',method:'GET', 
 handler: serverCallback
})

  function serverCallback(request, response) {
  	//console.log('hapi')
  	response('Hello hapi')
    }
    
 server.start(function() {
   console.log('Server running at:', server.info.uri)
    })    
    