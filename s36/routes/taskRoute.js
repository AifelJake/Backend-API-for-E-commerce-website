const express = require("express");
// Allows access to HTTP Method middlewares thats makes it easier to create routes for our application
const router = express.Router();
const taskController = require("../controllers/taskController.js");


// [SECTION] Routes
// The routes are responsible for defining the URI that our client accessess with corresponding controllers

// Route to get all tasks
router.get("/", (req, res) => {
	taskController.getAllTasks().then(resultFromController => res.send(resultFromController));
});

// Route to create new Task
router.post("/", (req, res) => {
	taskController.createTask(req.body).then(resultFromController => res.send(resultFromController));
})

// Delete a specific Task
// The whole URL is at "http://localhost:4000/tasks/:id"
// The task ID is obtained from the URL is denoted by the ":id" identifier in the route
// The colon (:) is an identifier that helps create a dynamic route which allows us to supply information in the URL
// The word that comes after the colon (:) symbol will be the name of the URL parameter
// ":id" is a wildcard where you can put any value, it then creates a link between "id" parameter in the URL and the value provided in the URL


router.delete("/:id", (req,res) => {
	taskController.deleteTask(req.params.id).then(resultFromController => res.send(resultFromController));
})

// Updating a task
router.put("/:id", (req, res) => {
	taskController.updateTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
})



router.get("/:id", (req, res) => {
	taskController.getSpecificTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
})

router.put("/:id/complete", (req, res) => {
	taskController.updatingStatus(req.params.id).then(resultFromController => res.send(resultFromController));
})



module.exports = router;



















