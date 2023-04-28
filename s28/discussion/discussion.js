// CRUD operations
/*
    - CRUD operations are the heart of any backend application.
    - Mastering the CRUD operations is essential for any developer.
    - This helps in building character and increasing exposure to logical statements that will help us manipulate our data.
    - Mastering the CRUD operations of any language makes us a valuable developer and makes the work easier for us to deal with huge amounts of information.
*/


// [SECTION] Create/Insert of documents

// Insert One document
/*
    - Since mongoDB deals with objects as it's structure for documents, we can easily create them by providing objects into our methods.
    - The mongo shell also uses JavaScript for it's syntax which makes it convenient for us to understand it's code
    - Creating MongoDB syntax in a text editor makes it easy for us to modify and create our code as opposed to typing it directly in the terminal where the whole code is only visible in one line.
- By using a text editor it allows us to type the syntax using multiple lines and simply copying and pasting the code in terminal will make it work.
    - Syntax
        - db.collectionName.insertOne({object});
    - JavaScript syntax comparison
        - object.object.method({object});
*/

db.users.insertOne({
	firstName: "Jane",
	lastName: "Doe",
	age: 21,
	contact: {
		phone: "098172818271",
		email: "janedoe@mail.com"
	},
	courses: ["CSS", "Javascript", "Python"],
	department: "none"
});


Insert Many
/*
Syntax 
- db.collectionName.insertMany([{objectA}, {objectB}]);


*/


db.users.insertMany([
	{
		firstName: "Stephen",
		lastName: "Hawking",
		age: 76,
		contact: {
			phone: "098172818271",
			email: "stephenhawking@mail.com"
		},
		courses: ["Python", "React", "PHP"],
		department: "none"
	},
	{
		firstName: "Neil",
		lastName: "Armstrong",
		age: 82,
		contact: {
			phone: "098172818271",
			email: "neilarmstrong@mail.com"
		},
		courses: ["React", "Laravel", "Sass"],
		department: "none"
	}
	]);


// Finding a single document 
// leaving the search criteria empty will retrieve all documents

// SELECT * FROOM users;

db.users.find();

// SELECT * FROM users where firstName = "Stephen";

db.users.find({ firstName: "Stephen" });

// The "pretty" method alllows us to be able to view documents returned by our terminals in a better format

db.users.find({ firstName: "Stephen" }).pretty();

// Finding a documents with multiple parameters

db.users.find({ lastName: "Armstrong" }, {age: 82});

// [SECTION] Updating documents (Update)

// Updating Single Document
db.users.insertOne({
	firstName: "Test",
	lastName: "Test",
	age: 0,
	contact: {
		phone: "00000000000",
		email: "test@mail.com"
	},
	courses: ["CSS", "Javascript", "Python"],
	department: "none"
});

/*
Syntax

	db.collectionName.updateOne({criteria}, {$set: {field: value}});

*/


db.users.updateOne(
	{ firstName: "Test" },
	{
		$set: {
			firstName: "Bill",
			lastName: "Gates",
			age: 65,
			contact: {
				phone: "09123456789",
				email: "bill@mail.com"
			},
			courses: ["PHP", "Laravel", "HTML"],
			department: "Operations",
			status: "active"
		}
	}
);


db.users.find({ firstName: "Bill" });



// Updating many Documents

db.users.updateMany(
	{department: "none"},
	{
		$set: {
			department: "HR"
		}
	}
);


// Replace One
/*
Syntax
	db.collectionName.replaceOne({criteria},  {field: value});


*/

db.users.replaceOne(
	{ firstName: "Bill"},
	{
			firstName: "Bill",
			lastName: "Gates",
			age: 65,
			contact: {
				phone: "09123456789",
				email: "bill@mail.com"
			},
			courses: ["PHP", "Laravel", "HTML"],
			department: "Operations"		
	}
);


// [SECTION] Deleting Documents (Delete)}

db.users.insert({
	firstName: "test"
});


// Delete Many

db.users.deleteMany({
	firstName: "test"
});

db.users.deleteOne({
	firstName: "test"
});

// [SECTION] advanced queries

db.users.find({
	contact: {
		phone: "098172818271",
		email: "stephenhawking@mail.com"
	}
});

// Query on nested field or property

db.user.find({
	"contact.email": "stephenhawking@mail.com"
});

// Querying an array without regard to order

db.users.find({courses: {$all: ["React", "Python"]}});

db.users.find({courses: {$all: ["React"]}});

// querying and embedded array


db.users.insertOne({
	nameArray: [{nameA: "Juan"}, {nameB: "Tamad"}]
})