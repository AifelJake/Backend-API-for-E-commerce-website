const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name : {
		type: String,
		required: true
	},
	description : {
		type: String,
		required: true
	},
	price : {
		type: Number,
		required: true
	},
	status:{
		type: String,
	default: "active"
	},
	productId : {
		type : String,
/*					required : [true, "course is required"]*/
				},
	status : {
		type : String,
	default: "Active"
	},
    numberOfStock: {
		type: Number,
		min: 10
	} 
})

module.exports = mongoose.model("Product", productSchema);