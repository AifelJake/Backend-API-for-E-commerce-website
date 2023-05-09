// Logic for handling HTTP request
const Product = require("../model/Product");

module.exports.registerProduct = (reqBody, userData) => {
	if(userData){
		let newProduct = new Product({
			name: reqBody.name,
			description: reqBody.description,
			price: reqBody.price,
			numberOfStock: reqBody.numberOfStock
		})

		return newProduct.save().then((result, error) => {
			if(error) {
				return false
			} else {
				return true
			}
		})
	} 

	let message = Promise.resolve("Access restricted.");

	return message.then((value) => {
		return value
	})

}

module.exports.getAllProducts = () => {
	return Product.find({}).then(result => {
		return result
	})
}

// register product
/*module.exports.registerProduct = (reqBody) => {
	let newProduct = new Product({
		name: reqBody.name,
		description: reqBody.description,
		price: reqBody.price,
		numberOfStock: reqBody.numberOfStock
	})


	return newProduct.save().then((result, error) => {
		if(error){
			console.log(error);
			return false;
		} else {
			return true
		}
	}) 
};*/