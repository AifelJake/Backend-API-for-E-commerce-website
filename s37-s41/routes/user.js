const express = require("express");
const router = express.Router(); // TO ACCESS HTTP REQUEST
const userController = require("../controllers/user.js")

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
router.get("/details", (req, res) => {
	userController.getProfile(req.body).then(resultFromController => res.send(resultFromController));
})
















module.exports = router; // Allows us to export the router object that will be accessed in our index.js file.