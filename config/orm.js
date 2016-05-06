var connection = require('./connection.js');

var orm = {
  getAll: function(callback) {
    var queryString = 'SELECT * FROM todos';
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result)
    });
  }
};

module.exports = orm;
