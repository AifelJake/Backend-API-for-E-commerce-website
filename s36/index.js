const express = require("express");

// Create an application using express
// In layman's term, app is our server

const app = express();
const port = 4000;

// Setup for allowing server to handle data
// Allows your app to read json data
// Methods used from express are middlewares
// Middlewares -> provides common services and capabilities of the app

app.use(express.json());
// Allows your app to read data from forms
// By default, information received from the url can only be received as a string or an array
// By applying the option of "extended:true" this allows us to receive information in other data types such as an object which we will use throughout our application
app.use(express.urlencoded({extended:true}));


// Tells our server to listen to the port
// If the port is accessed, we can run the server
// Returns a message to confirm that the server is running in the terminal

// [SECTION] Routes
// Express has methods corresponding to each HTTP method
// This route expects to receive a GET request at the base URI "/"
// The full base URI for our local application for this route will be at "http://localhost:4000"
// This route will return a simple message back to the client

app.get("/", (req, res) => {
	res.send("Hello World!");
})

app.get("/hello", (req, res) => {
	res.send("Hello from the /hello endpoint!");
})

// This route expects to receive a POST request at the URI/Endpoint "/hello"

app.post("/hello", (req, res) => {
	// req.body contains the contents/data of the request body
	// All the properties defined in our Postman request will be accessible here as properties with the same names

	res.send(`Hello there ${req.body.firstName} ${req.body.lastName}`);

})

// An array that will store user objects when /signup rout is accessed
// This will serve as our mock database

let users = [];

// route that expects to retrieve a POST request using "/signup"

app.post("/signup", (req, res) => {
	console.log(req.body);

	// If contents of the request.body with property username and password is empty
	if(req.body.username !== "" && req.body.passsword !== ""){
		// if conditions are true, values from req.body will be stored in "users" array
		users.push(req.body);
		res.send(`User ${req.body.username} successfully registered!`);
	}else{
		res.send("Please input BOTH username and password.");
	}

})

// Change user password using put method

app.put("/change-password", (req, res) => {
	// creates a variable that will store a message
	let message;

	for(let i = 0; i < users.length; i++){
		if(req.body.username == users[i].username){
			// change the password of the user found by loop
			users[i].password = req.body.password;
			message = `User ${req.body.username}'s password has been updated`;
			console.log(users);
			break;
		}else{
			message = "User does not exist."
		}
	}

	res.send(message);
})


// Create Homepage
app.get("/home", (req, res) => {
	res.send("Welcome to the homepage");
})
// Check the registered users
app.get("/users", (req, res) => {
	res.send(users);
})

// Deleting a user using delete method
app.delete("/delete-user", (req, res) => {
	let message;
	if(users.length !== 0){
		for(let i = 0; i < users.length; i++){
			if(req.body.username === users[i].username){
				users.splice(users[i], 1);
				message =`User ${req.body.username} has been deleted.`;
				break
			}
		}

		if(message === undefined){
			message = "user does not exist"
		}
	} else {
		message = "No users found."
	}

	res.send(message);
})





























if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}
