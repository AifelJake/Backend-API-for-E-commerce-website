const express = require("express");
const router = express.Router(); // TO ACCESS HTTP REQUEST
const userController = require("../controllers/user.js")

const auth = require("../auth.js")

// route for checking if mail already exist
router.post("/checkEmail", (req, res) => {
	userController.checkEmailExist(req.body).then(resultFromController => res.send(resultFromController));
})	


router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
})

//  route for user login
router.post("/login", (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
})

// route for details
router.post("/details", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization)
	userController.getProfile(userData.id).then(resultFromController => res.send(resultFromController));
})

// Enroll user to a course
router.post("/enroll", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization).isAdmin
	let data = {
		courseId: req.body.courseId
	}
	userController.enroll(data, userData).then(resultFromController => res.send(resultFromController));

})


/*// Enroll user to a course
router.post("/enroll", (req, res) => {
	let data = {
		userId: req.body.userId,
		courseId: req.body.courseId
	}
	userController.enroll(data).then(resultFromController => res.send(resultFromController));
})
*/











module.exports = router; // Allows us to export the router object that will be accessed in our index.js file.