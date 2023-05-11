const express = require("express");
const router = express.Router();
const productController = require("../controller/productController.js");
const auth = require("../auth.js")

// Register a product(for admin only)
router.post("/registerProducts", auth.verify, (req, res) => {
	let userData = auth.decode(req.headers.authorization).isAdmin;
	productController.registerProduct(req.body, userData).then(resultFromController => res.send(resultFromController));
});


// Get all products
router.get("/", (req, res) => {
	productController.getAllProducts().then(resultFromController => res.send(resultFromController));
})


// Get all active products
router.get("/active", (req, res) => {
	productController.getActiveProducts().then(resultFromController => res.send(resultFromController));
})


// Get a specific product by ID
router.get("/:productId", (req, res) => {
	productController.getSpecificProduct(req.params).then(resultFromController => res.send(resultFromController));
})


// Update a product(admin only)
router.put("/updateProduct", auth.verify, (req, res) => {
	let userData = auth.decode(req.headers.authorization).isAdmin;
	productController.updateProduct(req.body, userData).then(resultFromController => res.send(resultFromController));
});


// Archive a product(admin only)
router.put("/archive", auth.verify, (req, res) => {
	let userData = auth.decode(req.headers.authorization).isAdmin;
	productController.archiveAProduct(userData, req.body).then(resultFromController => res.send(resultFromController));
})

module.exports = router;