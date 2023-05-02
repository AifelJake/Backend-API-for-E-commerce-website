let http = require('http');


http.createServer(function(req, res){
	// CRUD --> R --> RETRIEVE
	// GET method id somehow equal to Retrieve Method in CRUD
	if(req.url == "/items" && req.method == "GET"){
		res.writeHead(200, {"Content-Type" : 'text/plain'});
		res.end("Data retrieved from database.")
	}

	// POST Method 	is used for creating or sending data to our data
	if(req.url == "/items" && req.method == "POST"){
		res.writeHead(200, {"Content-Type" : 'text/plain'});
		res.end("Data to be sent to the database")
	}

}).listen(4000);

console.log("Server running at localhost:4000");