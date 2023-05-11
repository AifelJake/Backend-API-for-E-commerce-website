// Logic for handling HTTP request
const Product = require("../model/Product");


// REGISTER A PRODUCT AS A ADMIN
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


// GETTING ALL PRODUCTS
module.exports.getAllProducts = () => {
	return Product.find({}).then(result => {
		return result
	})
}


// GETTING ALL ACTIVE PRODUCT
module.exports.getActiveProducts = () => {
	return Product.find({status: "active"}).then(result => {
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


// GETTING SPECIFIC PRODUCT
module.exports.getSpecificProduct = (reqParams) =>{
	return Product.findById(reqParams.productId).then(result => {
		return result;
	})
} 


// ARCHIVE A PRODUCT 
module.exports.archiveAProduct = (userData, reqBody) => {
	console.log(userData);
	let updateStatus = {
		status: "notActive"
	};

	if(userData === true && updateStatus) {
		return Product.findByIdAndUpdate(reqBody.productId).then((result, error) => {
			if (error) {
				return false
			} else {
				return true
			}
		})
	}

	let message = Promise.resolve("You don't have the access rights to do this action.");

	return message.then((value) => {
		return value
	})
}