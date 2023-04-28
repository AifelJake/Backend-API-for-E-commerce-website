// [SECTION] Comparison Query Operators
// $gt/gte operator
/*
	- Allows us to find documents that have field number values greater than or equal to a specified value.
	- Syntax
		db.collectionName.find({ field : { $gt : value } });
		db.collectionName.find({ field : { $gte : value } });
*/

db.users.find({ age: { $gt : 50}});
db.users.find({ age: { $gte : 50}});

// $lt/$lte 
/*
	- Allows us to find documents that have field number values less than or equal to a specified value.
	- Syntax
		db.collectionName.find({ field : { $lt : value } });
		db.collectionName.find({ field : { $lte : value } });
*/
db.users.find({ age: { $lt : 50}});
db.users.find({ age: { $lte : 50}});

// one operator
/*
	- Allows us to find documents that have field number values not equal to a specified value.
	- Syntax
		db.collectionName.find({ field : { $ne : value } });
*/
db.users.find({ age: { $ne : 50}});

// $in operator
/*
	- Allows us to find documents with specific match critieria one field using different values.
	- Syntax
		db.collectionName.find({ field : { $in : value } });
*/


db.users.find({ lastName : {$in : ["Hawking", "Doe"]} });
db.users.find({ courses : {$in : ["HTML", "React"]} });

// [SECTION] Logical Query Operator

// $or opertator
/*
	- Allows us to find documents that match a single criteria from multiple provided search criteria.
	- Syntax
		db.collectionName.find({ $or: [ { fieldA: valueB }, { fieldB: valueB } ] });
*/

db.user.find({ $or: [ {firstName: "Neil"}, {age: 25} ] });
db.user.find({ $or: [ {firstName: "Neil"}, {age: {$gt: 30}} ] });


// $and operator
/*
	- Allows us to find documents matching multiple criteria in a single field.
	- Syntax
		db.collectionName.find({ $and: [ { fieldA: valueB }, { fieldB: valueB } ] });
*/

db.users.find({ $and: [ {age: {$ne: 82}}, {age: {$ne: 76}} ] });

// [SECTION] Field Projection
/*
	- Retrieving documents are common operations that we do and by default MongoDB queries return the whole document as a response.
	- When dealing with complex data structures, there might be instances when fields are not useful for the query that we are trying to accomplish.
	- To help with readability of the values returned, we can include/exclude fields from the response.
*/

// Inclusion
/*
	- Allows us to include/add specific fields only when retrieving documents.
	- The value provided is 1 to denote that the field is being included.
	- Syntax
		db.users.find({criteria},{field: 1})
*/

db.users.find(
	{
		firstName: "Jane"
	},
	{
		firstName: 1,
		lastName: 1,
		contact: 1
	}
);

// Exclusion
/*
	- Allows us to exclude/remove specific fields only when retrieving documents.
	- The value provided is 0 to denote that the field is being included.
	- Syntax
		db.users.find({criteria},{field: 1})
*/
db.users.find(
	{
		firstName: "Jane"
	},
	{
		contact: 0,
		department: 0
	}
);


// Suppresing the ID field
/*
	- Allows us to exclude the "_id" field when retrieving documents.
	- When using field projection, field inclusion and exclusion may not be used at the same time.
	- Excluding the "_id" field is the only exception to this rule.
	- Syntax
		db.users.find({criteria},{_id: 0})
*/

db.users.find(
	{
		firstName: "Jane"
	},
	{
		firstName: 1,
		lastName: 1,
		contact: 1,
		_id: 0
	}
);

// Returning specific fields in embedded document

db.users.find(
	{
		firstName: "Jane"
	},
	{
		firstName: 1,
		lastName: 1,
		"contact.phone": 1
	}
);

// Suppressing specific fields in embedded document
db.users.find(
	{
		firstName: "Jane"
	},
	{
		"contact.phone": 0
	}
);

// Project specific Array element in the returned array
//$slice operator allows us ti retrieve only 1 element in a certain criteria

db.users.find(
	{"nameArray" :
		{
			nameA: "Juan"
		}
	},
	{
		nameArray: {$slice: 1}
	}
);


// [SECTION] Evaluation Query Operation

// $regex operator 

/*
	- Allows us to find documents that match a specific string pattern using regular expressions.
	- Syntax
		db.users.find({ field: $regex: 'pattern', $options: '$optionValue' });
*/


// Case Sensitivity Query
db.users.find({ firstName: {$regex: "N"} });
db.users.find({ firstName: {$regex: "n"} });


// Case Insensitivity Query

db.users.find({ firstName: {$regex: "j", $options: "i"} })









