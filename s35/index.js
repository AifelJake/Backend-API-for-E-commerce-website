const express = require("express");
const mongoose = require("mongoose");


const app = express();
const port = 3001;


// [Section] MongoDB connection

// Connect to the database by passing in your connection string, remember to replace the password and database names with actual values
// Due to updates in Mongo DB drivers that allow connection to it, the default connection string is being flagged as an error
// By default a warning will be displayed in the terminal when the application is run, but this will not prevent Mongoose from being used in the application

mongoose.connect("mongodb+srv://admin:admin123@zuitt-bootcamp.ncfarws.mongodb.net/B279_to-do?retryWrites=true&w=majority",
		{
			useNewUrlParser : true,
			useUnifiedTopology : true
		}
	);

let db = mongoose.connection;

// checks if theres an error in connecting
db.on("error", console.error.bind(console, "connection error"));
// confirms if connection is successful
db.once("open", () => console.log("We're connected to the cloud database"));


// [SECTION] Mongoose Schemas
// Schemas determine the structure of the documents to be written in the database
// Schemas act as blueprints to our data
// Use the Schema() constructor of the Mongoose module to create a new Schema object
// The "new" keyword creates a new Schema

const taskSchema = new mongoose.Schema({
// Define the fields with the corresponding data type
// For a task, it needs a "task name" and "task status"
// There is a field called "name" and its data type is "String"
	name : String,
	// There is a field called "status" that is a "String" and default value is "pending"
	status : {
		type: String,
		default: "pending"
	}
});


const userSchema = new mongoose.Schema({
	username: String,
	password: String,
});

// [SECTION] Models
// Uses schemas and are used to create/instantiate objects that correspond to the schema
// Models use Schemas and they act as the middleman from the server (JS code) to our database
// Server > Schema (blueprint) > Database > Collection
const Task = mongoose.model("Task", taskSchema);
const User = mongoose.model("User", userSchema);
// [SECTION] Creation of todo lists routes
// Setup for allowing the server to handle data from request
// Allows your app to read json data
// MIDDLEWARES

app.use(express.json());
// allows our app to read data from forms
app.use(express.urlencoded({extended:true}));

// CREATING A NEW TASK
// Business Logic
/*
1. Add a functionality to check if there are duplicate tasks
	- If the task already exists in the database, we return an error
	- If the task doesn't exist in the database, we add it in the database
2. The task data will be coming from the request's body
3. Create a new Task object with a "name" field/property
4. The "status" property does not need to be provided because our schema defaults it to "pending" upon creation of an object
*/

app.post("/tasks", (req, res) => {
	Task.findOne({ name : req.body.name }).then((result, err) =>{
		if(result != null && result.name == req.body.name){
			return res.send("Duplicate task found");
		}else{
			// Create a new task and save it to the db.
			let newTask = new Task({
				name : req.body.name
			})


			newTask.save().then((savedTask, saveErr) => {
				if(saveErr){
					// Will print any errors found in the console
					return console.error(saveErr);
				}else{
					// Return status code 201 for created
					return res.status(201).send("New task created");
				}
			})
		}
	})
});

// GETTING ALL TASKS
// Business Logic
/*
1. Retrieve all the documents
2. If an error is encountered, print the error
3. If no errors are found, send a success status back to the client/Postman and return an array of documents
*/


app.get("/tasks", (req, res) => {
	Task.find({}).then((result, err) => {
		// If error occured
		if(err){
			// Will print error message
			return console.log(err);
		}else{
			return res.status(200).json({
				data : result
			})
		}
	})
})



app.post("/signup", (req, res) => {
	Task.findOne({ username : req.body.username }).then((result, err) =>{
		if(result != null && result.username == req.body.username){
			return res.send("Duplicate username found");
		}else{
			// Create a new task and save it to the db.
			let newUser = new User({
				username : req.body.username,
				password : req.body.password
			})


			newUser.save().then((savedTask, saveErr) => {
				if(saveErr){
					// Will print any errors found in the console
					return console.error(saveErr);
				}else{
					// Return status code 201 for created
					return res.status(201).send("New task created");
				}
			})
		}
	})
});


app.get("/signup", (req, res) => {
	Task.find({}).then((result, err) => {
		// If error occured
		if(err){
			// Will print error message
			return console.log(err);
		}else{
			return res.status(200).json({
				data : result
			})
		}
	})
});



if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = app ;