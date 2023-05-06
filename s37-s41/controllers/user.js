const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");
// Check if the email already exist

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
				return {access: auth.createAcessToken(result)}
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