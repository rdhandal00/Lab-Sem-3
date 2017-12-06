var Hapi = require('hapi');
var inert = require('inert');

var server = Hapi.createServer('localhost', process.argv[2] || 8080);

server.route ({
    
  method: 'GET',
  path: '/',
  handler: {
      
    file:inert.join(__dirname, 'public/index.html')
     }
});

server.start();