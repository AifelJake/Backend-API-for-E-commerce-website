const User = require("../model/User");
const bcrypt = require("bcrypt");
// Check if the email already exist
const auth = require("../auth.js")


// REGISTERING USER
module.exports.registerUser = (reqBody) => {
	let newUser = new User({
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10)
	})

	return newUser.save().then((user, error) => {
		if (error) {
			return false;
		} else {
			return true;
		}
	})
}

// LOGIN WITH AUTHENTICATION

module.exports.loginUser = (reqBody) => {
	return User.findOne({email: reqBody.email}).then((result) => {
		if(result === null){
			return false;
		} else {
			let passwordIsCorrect = bcrypt.compareSync(reqBody.password, result.password);
			if(passwordIsCorrect) {
				return {access: auth.createAccessToken(result)}
			}else {
				return false
			}
		}
	})
}