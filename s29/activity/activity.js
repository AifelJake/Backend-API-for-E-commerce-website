db.users.find({ $or: [ {firstName: "s"}, {lastName: "d"} ] });

db.users.find({ $and: [ {age: {$gte: 70}} ] });

db.users.find({ $and: [ {firstName: {$regex: "e"}}, {age: {$lte: 30}} ] });

