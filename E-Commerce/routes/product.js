const express = require("express");
const router = express.Router();
const productController = require("../controller/productController.js");
const auth = require("../auth.js")


router.post("/registerProducts", auth.verify, (req, res) => {
	let userData = auth.decode(req.headers.authorization).isAdmin;
	productController.registerProduct(req.body, userData).then(resultFromController => res.send(resultFromController));
});

router.get("/", (req, res) => {
	productController.getAllProducts().then(resultFromController => res.send(resultFromController));
})


module.exports = router;