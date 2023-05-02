// - An alternative solution is to use the command "npx kill-port [port-number]" (e.g npx kill-port 4000).

let http = require("http");

// Mock database
let directory = [
		{
			"name" : "Brandon",
			"email" : "brandon@mail.com"
		},
		{
			"name" : "Jobert",
			"email" : "jobert@mail.com"
		}
	]


http.createServer(function (request, response) {

	// Route for returning all items upon receiving a GET request
	if(request.url == "/users" && request.method == "GET"){
		// Requests the "/users" path and GET information

	// Sets the status code to 200, denoting OK
	// Sets response output to JSON data type
		response.writeHead(200,{'Content-Type': 'application/json'});

	// Input HAS to be data type STRING 
	 // This string input will be converted to desired output data type which has been set to JSON
	// This is done because requests and responses sent between client and a node JS server requires the information to be sent and received as a stringified JSON
		  response.write(JSON.stringify(directory));
		  response.end();   	
	}
	if(request.url == "/users" && request.method == "POST"){
		// Declare and intialize a "requestBody" variable to an empty string
		// This will act as a placeholder for the resource/data to be created later on
		let requestBody = '';

		// A stream is a sequence of data
		// Data is received from the client and is processed in the "data" stream
		// The information provided from the request object enters a sequence called "data" the code below will be triggered
	 	// data step - this reads the "data" stream and processes it as the request body
		request.on('data', function(data){

			// Assigns the data retrieved from the data stream to requestBody
			requestBody += data;
		});
		request.on('end', function(){

			// Check if at this point the requestBody is of data type STRING
			// We need this to be of data type JSON to access its properties
			console.log(typeof requestBody);

			// Converts the string requestBody to JSON
			requestBody = JSON.parse(requestBody);

			// Create a new object representing the new mock database record
			let newUser = {
				"name" : requestBody.name,
				"email" : requestBody.email
			}

			// Add the new user into the mock database
			directory.push(newUser);
			console.log(directory);

			response.writeHead(200,{'Content-Type' : 'application/json'});
			response.write(JSON.stringify(newUser));
			response.end();
		});
	}


}).listen(4000);

console.log('Server running at localhost:4000');