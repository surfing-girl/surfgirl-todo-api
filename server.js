var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	complited: false
},
{
	id: 2,
	description: 'Go to the market',
	complited: false
},
{
	id: 3,
	description: '3h hacking',
	complited: true
}];

app.get('/', function(req, res) {
	res.send('Todo API Root');
});

app.get('/todos', function(req, res) {
	res.json(todos);
});

app.get('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);
	var machedTodo;

	todos.forEach(function(todo) {
		if(todoId == todo.id) {
			machedTodo = todo;
		}
	});

	if (machedTodo) {
		res.json(machedTodo);
	} else {
		res.status(404).send();
	}
	
});

app.listen(PORT, function() {
	console.log('Express listening on ' + PORT + '!');
});