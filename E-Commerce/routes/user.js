const express = require("express");
const router = express.Router(); // TO ACCESS HTTP REQUEST
const userController = require("../controller/userController.js")



// REGISTER A USER
router.post("/register", (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController));
})

router.post("/login", (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController));
})















module.exports = router;