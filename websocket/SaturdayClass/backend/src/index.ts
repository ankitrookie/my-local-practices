import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer(function(request: any, response: any) {
  console.log((new Date()) + ' Received request for ' + request.url);
  response.end("hi there");
});

// connecting our http server to websoeckt server
const wss = new WebSocketServer({ server });

// this says on connection, when connect happen go forward
wss.on('connection', function connection(ws) {
  // this says on error console this 
  ws.on('error', console.error);

  // on message, whene message happens 
  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});

server.listen(8080, function() {
  console.log((new Date()) + ' Server is listening on port 8080');
});
