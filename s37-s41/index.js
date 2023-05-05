// SERVER CREATION AND DB CONNECTION
const express = require("express");
const mongoose = require("mongoose");
// Allows us to control the App's Cross Origin Resource Sharing
const cors = require("cors")
const app = express();


// MongoDB Connection using SRV Link
mongoose.connect("mongodb+srv://admin:admin123@zuitt-bootcamp.ncfarws.mongodb.net/Course_Booking_System?retryWrites=true&w=majority",
{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.once("open", () => console.log("Now connected to MongoDB Atlas."))

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



// PORT LISTENING
if(require.main === module){
	app.listen(process.env.PORT || 4001, () => console.log(`API is now online on port ${process.env.PORT || 4001}`));
}

module.exports = app;