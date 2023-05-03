// console.log("aa")

fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json())
.then(result => console.log(result));


fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
   data.map((elem) => {
    return elem.title 
  })
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(result => console.log(result));



fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => console.log(res.status))

fetch('https://jsonplaceholder.typicode.com/todos', {
	method: "POST",
	headers: {"Content-Type" : "application/json"},
	body: JSON.stringify({
		title: "Created a post",
		id: 2
	})
})
.then(res => res.json())
.then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/todos/1', {
	method: "PUT",
	headers: {"Content-Type" : "application/json"},
	body: JSON.stringify({
		title: "Updated a post",
		id: 2
	})
})
.then(res => res.json())
.then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/todos/1', {
	method: "PUT",
	headers: {"Content-Type" : "application/json"},
	body: JSON.stringify({
		title: "Updated a To Do List Item",
		description: "To Update my To Do List with different structure",
		status: "Pending",
		id: 1, 
		userId: 1
	})
})
.then(res => res.json())
.then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/todos/2',{
	method: "DELETE"
})
