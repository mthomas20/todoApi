var express = require('express');
var bodyParser = require('body-parser');
const port = 3000;

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	console.log(req.body);
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(port, (err) =>{
	if (err) {
		return console.log('Unable to connect to port: ', port);
	}
	console.log('Successfully connected to port: ', port)
});





// add one todo

// var newTodo = new Todo({
// 	text: 'Smoked bong 3 times'
// });


// var newTodo1 = new Todo({
// 	text: 'Smoked bong 5 times',
// 	completed: true,
// 	completedAt: 1000
// });

// var newUser = new User({
// 	name: 'Tom',
// 	email: 'Tom@gmail.com'
	
// });


// newTodo.save().then((doc) => {

// 	console.log(`Todo was saved: \n${JSON.stringify(doc, undefined, 2)}`);
// }, (e) => {
// 	console.log('Unable to save Todo');
// });

// newTodo1.save().then((doc) => {

// 	console.log(`Todo was saved: \n${JSON.stringify(doc, undefined, 2)}`);
// }, (e) => {
// 	console.log('Unable to save Todo');
// });


// newUser.save().then((doc) => {

// 	console.log(`User was saved: \n${JSON.stringify(doc, undefined, 2)}`);
// }, (e) => {
// 	console.log('Unable to save User');
// });


