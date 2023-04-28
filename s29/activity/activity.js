db.users.find({ $or: 
	[{
		firstName: {$regex: "s", $options: "i"}}, {lastName: {$regex: "d", $options: "i"}}]},
	{
		firstName: 1,
		lastName: 1,
		_id: 0
	});

db.users.find({ $and: [ {age: {$gte: 70}} ] });

db.users.find({ $and: [ {firstName: {$regex: "e"}}, {age: {$lte: 30}} ] });

