const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");
// Check if the email already exist

const Course = require("../models/Course")

module.exports.checkEmailExist = (reqBody) => {

	return User.find({email: reqBody.email}).then(result => {
		if(result.length > 0){
			return true
		} else {
			return false
		}
	})
};


module.exports.registerUser = (reqBody) => {

	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		mobileNo: reqBody.mobileNo,
		// 10 is the value provided as the number of the salt rounds.
		password: bcrypt.hashSync(reqBody.password, 10)
	})


	return newUser.save().then((user, error) => {
		if (error) {
			return false;
		} else {
			return true;
		}
	})
};

// Function to login a user
module.exports.loginUser = (reqBody) => {

	return User.findOne({email: reqBody.email}).then(result => {
		console.log(result)
		if (result === null) {
			return false
		} else {
			const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password);
			if (isPasswordCorrect) {
				return {access: auth.createAccessToken(result)}
			} else {
				return false
			}
		}
	})

}


module.exports.getProfile = (userId) => {
	return User.findById(userId).then((result, error) => {
		if (error){
			console.log(error);
			return false;
		} else {
			result.password = ''
			return result
		}
	})
} 


// Enroll user to a class
/*
	Steps:
	1. Find the document in the database using the user's ID
	2. Add the course ID to the user's enrollment array
	3. Update the document in the MongoDB Atlas Database
*/


/*module.exports.enroll = async (data) => {
	// Add the course ID in the enrollments array of the user
	// Creates an "isUserUpdated" variable and returns true upon successful update otherwise false
	// Using the "await" keyword will allow the enroll method to complete updating the user before returning a response back to the frontend

	let isUserUpdated = await User.findById(data.userId).then(user => {
		user.enrollments.push({courseId: data.courseId});

		return user.save().then((user, error) =>{
			if(error){
				return false;
			} else {
				return true;
			}
		})
	})

	// Add the user ID in the enrollees array of the course
	// Using the "await" keyword will allow the enroll method to complete updating the course before returning a response back to the frontend
	
	let isCourseUpdates = await Course.findById(data.courseId).then(course => {
		course.enrollees.push({userId : data.userId});

		return course.save().then((course, error) => {
			if(error) {
				return false;
			} else {
				return true;
			}
		})
	})

	// Condition that will check if the user and course documents has been updated
	// User enrollment is successful


	if(isUserUpdated && isUserUpdated) {
		return "You are now enrolled";
	} else {
		return "Something went wrong with your request please try again later";
	}
}*/

module.exports.enroll = async (data, userData) => {
	if(userData === true){
		return false
	}else {
		let isUserUpdate = user = () => {
			user.enrollments.push({courseId: data.courseId});
			return user.save().then((result, error) => {
				if(error){
					return false
				} else {
					return true
				}
			})
		}
	}
}
	








