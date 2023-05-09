const Course = require("../models/Course");

// Create a new course
module.exports.addCourse = (data) => {
	console.log(data.isAdmin);
	if(data.isAdmin) {
		let newCourse = new Course({
			name: data.course.name,
			description: data.course.description,
			price: data.course.price
		})

		return newCourse.save().then((course, error) => {
			if(error){
				return error;
			}
			return course;
		})
	} 

	// If the user is not admin, then return this message as a promise to avoid errors
	let message = Promise.resolve("You don't have the access rights to do this action.");

	return message.then((value) => {
		return value
	})
}

// retrieve all courses function
module.exports.getAllCourses = () => {
	return Course.find({}).then(result => {
		return result;
	})
}

// retrieve all courses function
module.exports.getAllActive = () => {
	return Course.find({isActive : true}).then(result => {
		return result;
	})
}

// Retreiving a specific course

module.exports.getCourse = (reqParams) => {
	return Course.findById(reqParams.courseId).then(result =>{
		return result;
	})
}

// Update a course
module.exports.updateCourse = (reqParams, reqBody, isAdmin) => {
	console.log(isAdmin);

	if(isAdmin){
		let updatedCourse = {
		name : reqBody.name,
		description : reqBody.description,
		price : reqBody.price
		}

		return Course.findByIdAndUpdate(reqParams.courseId, updatedCourse).then((course, error) => {
			if(error){
				return false;
			}else{
				return "Course Updated!";
			}
		})
	}

	// If the user is not admin, then return this message as a promise to avoid errors
	let message = Promise.resolve("You don't have the access rights to do this action.");

	return message.then((value) => {
		return value
	})
	
}
// Archive a course
// In managing databases, it's common practice to soft delete our records and what we would implement in the "delete" operation of our application
// The "soft delete" happens here by simply updating the course "isActive" status into "false" which will no longer be displayed in the frontend application whenever all active courses are retrieved
// This allows us access to these records for future use and hides them away from users in our frontend application
// There are instances where hard deleting records is required to maintain the records and clean our databases
// The use of "hard delete" refers to removing records from our database permanently

module.exports.archiveCourse = (reqParams, isAdmin) => {
	console.log(isAdmin);
	let updateActiveField = {
		isActive : false
	};

	if(isAdmin){
	return Course.findByIdAndUpdate(reqParams.courseId, updateActiveField).then((course, error) => {

		// Course not archived
		if (error) {
			return false;
		// Course archived successfully
		} else {
			return true;
		}
	});	
	}

	// If the user is not admin, then return this message as a promise to avoid errors
	let message = Promise.resolve("You don't have the access rights to do this action.");

	return message.then((value) => {
		return value
	})
};



