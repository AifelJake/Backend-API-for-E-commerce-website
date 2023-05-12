const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: [true, "UserId is required!"]
	},
	products: [
			{
				productId: {
					type: String,
					/*required: true*/
				},
				quantity: {
					type: Number,
				/*	required: true*/
				}
			}
	],
	totalAmount: {
		type: Number,
		required: true
	},
	purchasedOn: {
		type: Date,
	default: new Date()
	}
	
})



module.exports = mongoose.model("Order", orderSchema);