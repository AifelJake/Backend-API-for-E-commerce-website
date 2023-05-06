	const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName : {
		type : String,
		required : [true, "First Name REQUIRED"]
	},
	lastName : {
		type : String,
		required : [true, "Last Name REQUIRED"]
	}, 
	email : {
		type : String,
		required : [true,"Email REQUIRED"]
	},
	password : {
		type : String,
		required : [true,"Password REQUIRED"]
	},
	isAdmin : {
		type : Boolean,
		dafault : false
	},
	mobileNo : {
		type : String,
		required : [true,"Mobile number REQUIRED"]
	},
	enrollments : [
			{
				course : {
					type : String,
					required : [true, "course is required"]
				},
				enrolledOn : {
					type : Number,
				default : new Date()
				},
				status : {
					type : String,
				default: "Enrolled"
				}
			}
		]
})

module.exports = mongoose.model("User", userSchema);