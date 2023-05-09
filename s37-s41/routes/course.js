const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController.js");
const auth = require("../auth.js");

// Route for creating a course
router.post("/", auth.verify, (req, res) => {
	const data = {
		course: req.body,
		isAdmin: auth.decode(req.headers.authorization).isAdmin
	}
	courseController.addCourse(data).then(resultFromController => res.send(resultFromController));
});

// Get all courses
router.get("/all", (req, res) => {
	courseController.getAllCourses().then(resultFromController => res.send(resultFromController));
})

// Get all "ACTIVE" courses
router.get("/", (req, res) => {
	courseController.getAllActive().then(resultFromController => res.send(resultFromController));
})

// Retrieve specific course
router.get("/:courseId", (req, res) => {
	console.log(req.params.courseId);
	courseController.getCourse(req.params).then(resultFromController => res.send(resultFromController));

})

// Update a specific course
router.put("/:courseId", auth.verify, (req, res) => {
	let isAdmin = auth.decode(req.headers.authorization).isAdmin;
	courseController.updateCourse(req.params, req.body, isAdmin).then(resultFromController => res.send(resultFromController));

})

// Route to archiving a course
// A "PUT" request is used instead of "DELETE" request because of our approach in archiving and hiding the courses from our users by "soft deleting" records instead of "hard deleting" records which removes them permanently from our databases
router.put("/:courseId/archive", auth.verify, (req, res) => {
	let isAdmin = auth.decode(req.headers.authorization).isAdmin;
	courseController.archiveCourse(req.params, isAdmin).then(resultFromController => res.send(resultFromController));
	
});



// Allows us to export the "router" object that will be accessed in our "index.js" file

module.exports = router;