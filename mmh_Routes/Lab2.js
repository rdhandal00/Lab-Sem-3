 
let hapi=require('hapi')
let server=new hapi.Server()

server.connection({
 host:'localhost',
  port:Number(process.argv[2] || 8080)

  
})

 server.route({
	path: '/{name}',
	 method:'GET', 
	 handler: serverCallback
 	
   
 })
 	
 function serverCallback(req, resp) {
 	//console.log(req.params.name)
   resp('Hello ' + req.params.name)
    
   
 }
    
server.start(function () {
     console.log('Server running at:',server.info.uri)
    
  
}) 