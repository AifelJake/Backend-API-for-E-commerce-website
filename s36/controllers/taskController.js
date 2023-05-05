// Controllers contain the functions and business logic of our Express JS application
// Meaning all the operations it can do will be placed in this file

// Uses the "require" directive to allow access to the "Task" model which allows us to access Mongoose methods to perform CRUD functions
// Allows us to use the contents of the "task.js" file in the "models" folder

const Task = require("../models/task.js");

module.exports.getAllTasks = () => {
	return Task.find({}).then(result => {
		return result;
	})
}

module.exports.createTask = (requestBody) => {
	let newTask = new Task({
		// Sets the name property with the value received from the client postman
		name : requestBody.name
	})

	return newTask.save().then((task, error) => {
		if(error){
			console.log(error);
			return false;
		}else{
			return task;
		}
	})
}

module.exports.deleteTask = (taskId) => {
	return Task.findByIdAndRemove(taskId).then((removedTask, error) =>{
		if(error){
			console.log(error);
			return false;
		}else{
			return removedTask;
		}
	})
}


module.exports.updateTask = (taskId, newContent) => {
	return Task.findById(taskId).then((result, error) => {
		if(error){
			console.log(error);
			return false;
		}

		result.name = newContent.name;

		return result.save().then((updatedTask, saveErr) =>{
			if(saveErr){
				console.log(saveErr);
				return false;
			}else{
				return updatedTask;
			}
		})
	})
}

// Getting a specific task

module.exports.getSpecificTask = (taskId) => {
	return Task.findById(taskId).then((result, error) => {
		if(error) {
			console.log(error);
			return false;
		} else {
			return result;
		}
	})
}

// Updating Status

module.exports.updatingStatus = (taskId) => {
	return Task.findById(taskId).then((result, error) => {
		if(error){
			console.log(error);
			return false;
		}

		 result.status = "Complete";
		 return result.save().then((updatedTask, Err) => {
		 	if(saveErr){
		 		console.log(Err);
		 	} else {
		 		return updatedTask;
		 	}
		 })
	})
}