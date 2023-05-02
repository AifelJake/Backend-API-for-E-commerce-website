const http = require("http");

http.createServer((request, response) => {

	if(request.url == "/profile"){
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.end("Welcome to Booking System");
	} else if (request.url == "/courses") {
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.end("Here’s our courses available");
	}else if (request.url == "/addcourses") {
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.end(" Add a course to our resources");
	}else if (request.url == "/updatecourses") {
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.end(" Update a course to our resources");
	} else {
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.end(" Archive courses to our resources");
	}
}).listen(3000);

console.log("Server running at localhost:3000");