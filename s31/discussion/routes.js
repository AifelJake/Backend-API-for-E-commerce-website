const http = require("http");


// Creates a variable "port" to store the port number
const port = 4000;

const server = http.createServer((request, response) => {
	// Accessing the "greeting" route returns a message of "Hello Again"
	// "request" is an object that is sent via the client (browser)
	// The "url" property refers to the url or the link in the browser

	if(request.url == "/greeting"){
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.end("Hello Again!");
	} else if (request.url == "/homepage") {
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.end("This is the homepage.");
	} else {
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.end("404: Page not found!");
	}
});



server.listen(port);
console.log(`Server now accessible at localhost :${port}`);





















