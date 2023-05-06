const jwt = require('jsonwebtoken');


const secret = "CourseBookingAPI";

module.exports.createAccessToken = (user) => {
	// Payload
	const data = {
		id: user._id,
		email: user.email,
		isaAdmin: user.isAdmin
	}	

	return jwt.sign(data, secret, {});
}