var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
// var envs = require('dotenv').config({silent: false});


// Initiate Express app
var app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));

// Setup Handlebars with Express
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Define node port
var PORT = process.env.PORT || 8000;

// Get the Todo model
var Todo = require('./models/todo.js');

// Routes
app.get('/', function(req, res) {
  Todo.getAllTodos(function(todos) {
    res.render('home', {todos})
  });
});

app.post('/addTodo', function(req,res) {
  var description = req.body.description;
  // console.log(description);
  Todo.createTodo(description, function(todos) {
    res.redirect('/');
  })
});

// Node port listener with database connection while Express server is running
app.listen(PORT, function(err) {
  console.log('Listening on port ' + PORT);
});
