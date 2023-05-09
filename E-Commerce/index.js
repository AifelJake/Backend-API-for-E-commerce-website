const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const productRoutes = require("./routes/product.js");
const userRoutes = require("./routes/user.js")

mongoose.connect("mongodb+srv://admin:admin123@zuitt-bootcamp.ncfarws.mongodb.net/Ecom?retryWrites=true&w=majority",
{
	useNewUrlParser: true,
	useUnifiedTopology: true
});


mongoose.connection.once("open", () => console.log("Now connected to MongoDB Atlas."))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.use("/register", productRoutes);
app.use("/user", userRoutes);



if(require.main === module){
	app.listen(process.env.PORT || 4002, () => console.log(`API is now online on port ${process.env.PORT || 4002}`));
}


module.exports = app;




