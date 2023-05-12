const Order = require("../model/Order.js");
const User = require("../model/User.js");
const Product = require("../model/Product.js");


/*module.exports.userCheckOut = (data) => {
    return Product.findById(data.reqBody.productId).then(product => {
        console.log(product)
        if (product == null) {
            return "the product is not available"
        }
        else {
            let newOrder = new Order ({
                userId: data.userId,
                products: {
                    productId: product.id,
                    quantity: data.reqBody.quantity
                },
                totalAmount: product.price * data.reqBody.quantity
            });

            return newOrder.save().then((order, error) => {
                if(error) {
                    return false
                } else {
                    console.log(order)
                    return true
                }
            })
        }
    })
}

*/
module.exports.checkOut = (reqParams, reqBody) => {
	if(!reqBody.isAdmin){
		return Product.findOne({_id: reqParams.productId}).then(res => {
			let data = []

			data.push({
				productId:res._id,
				price: res.price,
				quantity: reqBody.quantity.quantity,

			})

			let newOrder = new Order({
				totalAmount: res.price * reqBody.quantity.quantity,
				userId: reqBody.id
			})

			return newOrder.save().then((res, err) => {
				if(err){
					return "something wen wrong"
				} else {
					return "your order has been received"
				}
			})
		})
	} else{
		return Promise.resolve("Admin can't check out!")
	}
}


module.exports.getorders = () => {
	return Order.find({}).then(result => {
		return result
	})
}





















/*module.exports.userCheckOut = (data) => {
	return Product.findById(data.reqBody.productId).then(product => {
		console.log(product)
		if (product == null) {
			return "the product is not available"
		}
		else {
			let newOrder = new Order ({
				userId: data.userId,
				products: {
					productId: product.id,
					quantity: data.reqBody.quantity
				},
				totalAmount: product.price * data.reqBody.quantity
			});

			return newOrder.save().then((order, error) => {
				if(error) {
					return false
				} else {
					console.log(order)
					return true
				}
			})
		}
	})
}

*/


/*module.exports.userCheckOut = (data) => {
	const orderedItems = data.reqBody.map(products => {
		console.log(products)
	})
}



















/*module.exports.orderAProduct = async (userData) => {
	console.log(userData.data.products);
	let userdata = await User.findById(userData.data.userId).then((user) => {
		Product.findById(userData.data.productId).then((result) => {
			user.push(

					{

						userId: userData.data.userId,
						products: [

								{
									productId: userData.data.productId,
									quantity: userData.data.quantity
								}
							],
						totalAmount: Product.price * userData.data.quantity
					}


				);

				console.log(Order)

				 return order.save().then((result, error) => {
					if(error){
						.catch(error => {
							console.log(`${error}`)
						})
					}
				})
		})	 
	})
}
*/












/*module.exports.orderAProduct = async (data) => {
	const {user, order} = data;

	if(!user){
		return "You are shit"
	}

	const product = await Product.findById(order.products.productId).then((result) => {
		User.findById(order.userId);
	});

	if(product) {
		let totalAmount = product.price * order.quantity;
		let newOrder = new Order({
			userId: user._id,
			products : [{
				productId:product._id,
				quantity: order.quantity
			}],
			totalAmount,
			purchasedOn : new Date ()
		})

		await newOrder.save();
		console.log(product);
		return "Purchase Successfully";
	} else {
		return "Product not found!"
	}
}
*/





/*module.exports.orderAProduct = (data) => {
	if(data.user === false){
		console.log(data.user)
		let orderedProduct = new Order({
			userId: data.order.userId,
			products:[
				{
					productId: data.order.productId,
					quantity: data.order.quantity
				},
			],
			totalAmount: data.order.totalAmount
		})

		return orderedProduct.save().then((result, error) => {
			if (error){
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

}*/

/*
module.exports.userCheckOut = (data) => {
		return Product.findById(data.reqBody.productId).then(product => {
			console.log(product)
			if (product == null) {
				return "the product is not available"
			}
			else {
				let newOrder = new Order ({
					userId: data.userId,
					products: {
						productId: product.id,
						quantity: data.reqBody.quantity
					},
					totalAmount: product.price * data.reqBody.quantity
				});

				return newOrder.save().then((order, error) => {
					if(error) {
						return false
					} else {
						console.log(order)
						return true
					}
				})
			}
		})
	}
	*/