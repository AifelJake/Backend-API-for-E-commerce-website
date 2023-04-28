db.rooms.insertOne({
	name: "single",
	accomodates: 2,
	price: 1000,
	description: "A simple room with all the base necessities",
	rooms_available: 10,
	isAvailable: false
});


db.rooms.insertMany([
	{
		name: "double",
		accomodates: 3,
		price: 2000,
		description: "A room fit for a small family going on a vacation",
		rooms_available: 5,
		isAvailable: false
	},
	{
		name: "Queen",
		accomodates: 4,
		price: 4000,
		description: "A room with queen size bed perfect for a simple getaway",
		rooms_available: 15,
		isAvailable: false,
	}
]);

db.rooms.find({name: "double"})

db.rooms.updateOne(
	{name: "Queen"},
	{
		$set:{
			rooms_available: 0
		}
	}
);


db.rooms.deleteMany({
	rooms_available: 0
});





