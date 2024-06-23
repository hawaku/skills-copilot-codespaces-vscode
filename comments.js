// Create web server
// Create a web server that listens to incoming requests on port 3000. The server should respond with the message "Hello, World!" for all requests.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000);