// *   **Fetch Data**: Write JavaScript to fetch todos from the JSON Placeholder API,
// we want the ToDos endpoint, [you can find more about the API docs in here](https://jsonplaceholder.typicode.com).
// *   **Display Data:** Populate the DOM with the fetched todos.
// Pay attention to the completed status of each task in the response and style it accordingly!
const todoList = document.querySelector('#todo-list');

// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

const getTodos = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	if (!res.ok) throw new Error(`Something went wrong! Error: ${res.status}`);

	const data = await res.json();

	console.log(data);

	return data;
};

const renderTodo = (todo, container) => {
	const li = document.createElement('li');
	li.setAttribute('id', todo.id);
	li.textContent = todo.title;
	todo.completed
		? (li.className = 'bg-green-500 border-2 mb-2')
		: (li.className = 'bg-red-500 border-2 mb-2');
	container.appendChild(li);
};

const fetchAndRenderTodos = async () => {
	try {
		const todos = await getTodos();
		console.log(todos);
		todos.forEach((todo) => {
			renderTodo(todo, todoList);
		});
	} catch (error) {
		console.error(error);
	}
};

fetchAndRenderTodos();
