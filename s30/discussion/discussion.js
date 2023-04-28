// Create documents to use for the discussion
db.test.insertMany([
  {
    name : "Apple",
    color : "Red",
    stock : 20,
    price: 40,
    supplier_id : 1,
    onSale : true,
    origin: [ "Philippines", "US" ]
  },

  {
    name : "Banana",
    color : "Yellow",
    stock : 15,
    price: 20,
    supplier_id : 2,
    onSale : true,
    origin: [ "Philippines", "Ecuador" ]
  },

  {
    name : "Kiwi",
    color : "Green",
    stock : 25,
    price: 50,
    supplier_id : 1,
    onSale : true,
    origin: [ "US", "China" ]
  },

  {
    name : "Mango",
    color : "Yellow",
    stock : 10,
    price: 120,
    supplier_id : 2,
    onSale : false,
    origin: [ "Philippines", "India" ]
  }
]);

// [SECTION] MongoDB Aggregation
/*
  - Used to generate manipulated data and perform operations to create filtered results that helps in analyzing data
  - Compared to doing CRUD operations on our data from previous sessions, aggregation gives us access to manipulate, filter and compute for results providing us with information to make necessary development decisions without having to create a frontend application.
*/

// Using Agregate Method
/*
  - The "$match" is used to pass the documents that meet the specified condition(s) to the next pipeline stage/aggretation process.
  - Syntax
    - { $match: { field: value } }
  - The "$group" is used to group elements together and field-value pairs using the data from the grouped elements
  - Syntax
    - { $group: { _id: "value", fieldResult: "valueResult" } }
  - Using both "$match" and "$group" along with aggregation will find for products that are on sale and will group the total amount of stocks for all suppliers found.
  - Syntax
    - db.collectionName.aggregate([
      { $match: { fieldA, valueA } },
      { $group: { _id: "$fieldB" }, { result: { operation } } }
    ])
  - The "$" symbol will refer to a field name that is available in the documents that are being aggregated on.
  - The "$sum" operator will total the values of all "stock" fields in the returned documents that are found using the "$match" criteria.
*/

db.fruits.aggregate([
  {$match: {onSale: true}},
  {$group: {_id: "$supplier_id", total: {$sum: "$stock"}}}
]);

// Field projection with aggregation
/*
  - The "$project" can be used when aggregating data to include/exclude fields from the returned results
  - Syntax
    - { $project : { field: 1/0 } }
*/

db.fruits.aggregate([
  {$match: {onSale: true}},
  {$group: {_id: "$supplier_id", total: {$sum: "$stock"}}},
  {$project: {_id: 0}}
]);
  
// Sorting aggregated results
/*
  - The "$sort" can be used to change the order of aggregated results
  - Providing a value of -1 will sort the aggregated results in a reverse order
  - Syntax
    - { $sort { field: 1/-1 } }
*/

db.fruits.aggregate([
  {$match: {onSale: true}},
  {$group: {_id: "$supplier_id", total: {$sum: "$stock"}}},
  {$sort: {total: 1}}
]);

// Aggregating results based on array fields
/*
  - The "$unwind" deconstructs an array field from a collection/field with an array value to output a result for each element.
  - The syntax below will return results creating separate documents for each of the countries provided per the "origin" field
  - Syntax
    - { $unwind: field }
*/

db.fruits.aggregate([
  {$unwind: "$origin"}
]);

// Displays fruits documents by their origin and the kinds of fruits that are supplied

db.fruits.aggregate([
  {$unwind: "$origin"},
  {$group: {_id: "$origin", kinds: {$sum: 1}}}
]);


// [SECTION] Guidelines on Schema Design
/*  
  - Schema design/data modelling is an important feature when creating databases.
  - MongoDB documents can be categorized into normalized and de-normalized/embedded data.
  - Normalized data refers to a data structure where documents are referred to each other using their ids for related pieces of information.
  - De-normalized data/embedded data refers to a data structure where related pieces of information is added to a document as an embedded object.
  - Both data structures are common practice but each of them have their pros and their cons.
  - Normalized data makes it easier to read information because separate documents can be retrieved but in terms of querying results, it performs slower compared to embedded data due to having to retrieve multiple documents at the same time.
  - This approach is recommended for data structures where pieces of information are commonly operated on/changed.
  - De-normalized data/embedded data makes it easier to query documents and has a faster performance because only one query needs to be done in order to retrieve documents. However, if the data structure becomes too complex it makes it more difficult to manipulate and access information.
  - This approach is recommended for data structures where pieces of information are commonly retrieved and rarely operated on/changed.
*/

// One-To-One Relationship
// Creates an id and stores it in the variable owner for use in document creation
var owner = ObjectId();

// Creates an "owner" document that uses the generated id
db.owners.insert({
  _id: owner,
  name: "John Smith",
  contact: "0987654321"
});

// Change the "<owner_id>" using the actual id in the previously created document
db.suppliers.insert({
  name: "ABC fruits",
  contact: "1234567890",
  owner_id: <owner_id>
});

// One-To-Few Relationship
db.suppliers.insert({
  name: "DEF Fruits",
  contact: "1234567890",
  addresses : [
    { street: "123 San Jose St", city: "Manila"},
    { street: "367 Gil Puyat", city: "Makati"}
  ]
});

// One-To-Many Relationship
var supplier = ObjectId();
var branch1 = ObjectId();
var branch2 = ObjectId();

db.suppliers.insert({
  _id: supplier,
  name: "GHI Fruits",
  contact: "1234567890",
  branches: [
    branch1
  ]
});

// Change the "<branch_id>" and "<supplier_id>" using the actual ids in the previously created document
db.branches.insert({
  _id: <branch_id>,
    name: "BF Homes",
    address: "123 Arcardio Santos St",
    city: "Paranaque",
    supplier_id: <supplier_id>
});

db.branches.insert(
  {
    _id: <branch_id>,
      name: "Rizal",
      address: "123 San Jose St",
      city: "Manila",
      supplier_id: <supplier_id>
  }
);













