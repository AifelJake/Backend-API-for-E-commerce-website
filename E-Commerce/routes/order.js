const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController.js");
const auth = require("../auth.js")


/*router.post("/checkout", auth.verify, (req, res) => {
    const userData = auth.decode(req.headers.authorization);

    let data = {
        userId: userData.id,
        reqBody: req.body
    };

    if(userData.isAdmin == false) {
        orderController.userCheckOut(data).then(resultFromController => res.send(resultFromController));
    }
    else {
        res.send("You are not authorized")
    }
})
*/
router.post("/products/:productId/checkout", auth.verify, (req, res) => {
	const data = {
		quantity: req.body,
		id: auth.decode(req.headers.authorization).id,
		isAdmin: auth.decode(req.headers.authorization).isAdmin
	}
	orderController.checkOut(req.params, data).then(resultFromController => res.send(resultFromController))
})

router.get("/", (req, res) => {
	orderController.getorders().then(resultFromController => res.send(resultFromController))
})





















/*/*router.post("/orderProducts", auth.verify, (req, res) => {
	let data = {
		user: auth.decode(req.headers.authorization).isAdmin,
		order: req.body,
/*		id: auth.decode(req.headers.authorization).id*/
/*	}
	orderController.orderAProduct(data).then(resultFromController => res.send(resultFromController));
})*/


/*router.post("/checkout", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization);

	let data = {
		userId: userData.id,
		reqBody: req.body.products
	};

	if(userData.isAdmin == false) {
		orderController.userCheckOut(data).then(resultFromController => res.send(resultFromController));
	}
	else {
		res.send("You are not authorized")
	}
})*/


/*router.post("/checkout", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization);

	let data = {
		userId: userData.id,
		reqBody: req.body
	};

	if(userData.isAdmin == false) {
		orderController.userCheckOut(data).then(resultFromController => res.send(resultFromController));
	}
	else {
		res.send("You are not authorized")
	}
})*/




/*router.post("/checkout", auth.verify, (req, res) =>{
	const orderedItems = data.reqBody.map(products => {
		console.log(products)
	})
}*/


module.exports = router