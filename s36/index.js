const express = require("express");
const mongoose = require("mongoose");


const taskRoute = require("./routes/taskRoute.js")

// SErver setup/middlewares
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Add task route
// Allows all the task route created in the taskRoute.js file to use /task
app.use("/tasks", taskRoute)
// DB connection
// COnnecting to mongoDB Atlas

mongoose.connect("mongodb+srv://admin:admin123@zuitt-bootcamp.ncfarws.mongodb.net/B279_to-do?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});















// Server Listening
if(require.main === module){
	app.listen(port, () => console.log(`Server running at ${port}`));
};

module.exports = app;








