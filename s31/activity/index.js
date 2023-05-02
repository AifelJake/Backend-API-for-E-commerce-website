const http = require("http");


const port = 3000;

const server = http.createServer((request, response) => {
	if(request.url == "/login"){
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.end("You are in login page");
	} else {
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.end("404: Error! page not found");
	}
});




server.listen(port);
console.log(`server is successfully running: ${port}`)