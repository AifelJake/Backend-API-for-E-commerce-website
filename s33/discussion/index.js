// console.log("Hello World!");

// [SECTION] JS Synchronous vs Asynchronous
// JS by default is schronous, meaning only one statement is executed at a time.

// TOP -> BOTTOM and LEFT -> RIGHT

console.log("Hello Wolrd!");
// conoloe.log("Hello Again!");
console.log("Goodbye!");

console.log("Hello Wolrd");
// for(let i = 0; i <= 1500; i++){
// 	console.log(i);
// }
console.log("Hello Again!");

// Asynchronous means that we can proceed to execute other statements while consuming code is running in the background.

// [SECTION] Getting all posts

// The Fetch API allows you to asynchronously request for a resource (data)
// A "promise" is an object that represents the eventual completion (or failure) of an asynchronous function and it's resulting value
// Syntax
	// fetch('URL')

console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

// Syntax
// fetch(URL)
// .then((res) => {})

// Retrieves all posts following the Rest API (retrieve, /posts, GET)
// By using the then method we can now check for the status of the promise

// "fetch" method will return a promise that resolves to a response object
// "promise" will eventually be "resolved" or "rejected"
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => console.log(res.status));

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(json => console.log(json));

// Use the "json" method from the response object to convert the data retrieved into JSON format to be used in the application
// Print the converted JSON value from fetch request
// Using multiple "then" methods creats "promise chain"

// The "async" and "await" keywords is another approach that can be used to achieve asynchronous code
// Used in functions to indicate which portions of code should be waited for
// Creates an asynchronous function

async function fetchData(){
	// awaits for the "fetch" method to complete then stores the value in the "result" variable
	let result = await fetch("https://jsonplaceholder.typicode.com/posts");

	// Result returned by fetch returns a promise
	console.log(result);

	// The returned "Response" is an object
	console.log(typeof result);

	// We cannot access the content of the "Response" by directly accessing it's body property
	console.log(result.body);

	// Converts the data from the "Response" object as JSON
	let json = await result.json();

	console.log(json);
}

fetchData();

// [SECTION] Getting a specific post
// Retrieves a specific post following the REST API (retrieve, /posts/:id, GET)

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(result => console.log(result));

// [SECTION] Creating a post

// Sets the method of the "Request" object to "POST" following REST API
// Default method is GET
// Sets the header data of the "Request" object to be sent to the backend
// Specified that the content will be in a JSON structure
// Sets the content/body data of the "Request" object to be sent to the backend
// JSON.stringify converts the object data into a stringified JSON

fetch("https://jsonplaceholder.typicode.com/posts", {
	method: "POST",
	headers: {"Content-Type" : "application/json"},
	body: JSON.stringify({
		title: "New Post",
		body: "Hello World",
		userId: 1
	})
})
.then(res => res.json())
.then(json => console.log(json));

// [SECTION] Updating apost using PUT method
fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "PUT",
	headers: {"Content-Type" : "application/json"},
	body: JSON.stringify({
		id: 1,
		title: "Updated Post",
		body: "Hello again!",
		userId: 1
	})
})
.then(res => res.json())
.then(json => console.log(json));

// [SECTION] Updating a post using PATCH method
fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "PUT",
	headers: {"Content-Type" : "application/json"},
	body: JSON.stringify({
		title: "Correctred Post"
	})
})
.then(res => res.json())
.then(json => console.log(json));

// [SECTION] Deleting a post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "DELETE"
});

// [SECTION] Filtering post
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
.then(res => res.json())
.then(json => console.log(json));

// [SECTION] Retrieveing nested/related comments to post
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
.then(res => res.json())
.then(json => console.log(json));