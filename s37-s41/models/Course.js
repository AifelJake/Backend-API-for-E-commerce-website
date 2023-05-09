const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	name : {
		type : String,
		required : [true, "COURSE NAME is required"]
	},
	description : {
		type : String,
		required : [true, "COURSE DESCRIPTION is required"]
	},
	price : {
		type : Number,
		required : [true, "COURSE PRICE is required"]
	},
	isActive : {
		type : Boolean,
		default: true
	},
	createdOn : {
		type : Date,
		// The "new" date expression intantiates the current data
		default: new Date()
	},
	enrollees : [
			{
				userId : {
					type: String,
					required : [true, "UserId is requires!"]
				},
				enrolledOn : {
					type: Date,
				default : new Date()
				}
			}
		]
})


module.exports = mongoose.model("Course", courseSchema)