db.fruits.aggregate([
	{$match: {onSale: true}},
	{$group: {_id: "$supplier_id", fruitsOnSale: {$sum: 1}}},
	{$project: {_id: 0}}
]);


db.fruits.aggregate([
	{$match: {stock: {$gte: 20}}},
	{$group: {_id: "supplier_id", enoughStock: {$sum: 1}}},
	{$project: {_id: 0}}
]);


db.fruits.aggregate([
	{$match: {onSale: true}},
	{$group: {_id: "$supplier_id", avg_price: {$avg: "$price"}}},
]);


db.fruits.aggregate([
	{$match: {onSale: true}},
	{$group: {_id: "$supplier_id", avg_price: {$max: "$price"}}},
]);

db.fruits.aggregate([
	{$match: {onSale: true}},
	{$group: {_id: "$supplier_id", avg_price: {$min: "$price"}}},
]);


