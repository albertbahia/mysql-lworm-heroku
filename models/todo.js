var orm = require('../config/orm.js');

var todo = {
  getAllTodos: function(callback) {
    orm.getAll(function(result) {
      callback(result);
    });
  },
  createTodo: function(description, callback) {
    orm.addTodo(description, function(result) {
      callback(result);
    });
  }
};

module.exports = todo;
