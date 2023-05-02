// Use "require" directive to load Node.js modules
// A "http module" lets node.js transfer data using Hyper Text Transfer Protocol
// Clients (browser) and servers (node JS/Express JS application) communicate by exchanging individual messages.


let http = require("http");

// Using this module's createServer() method, we can create an HTTP server that listens to request on specified port.

// A port is a virtual point where network connection start and end.
// Each port is associated with a specific process or service.
// The server will be assigned to port 4000
http.createServer(function (request, response){
	// Use writeHead() method to:
	// Set a status code for the message - 200 means ok
	// Set the content-type of the response as a plain text

	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.end("Hello World!");
}).listen(4000);

console.log("Server running at localhost:4000");





















