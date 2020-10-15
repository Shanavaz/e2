var mysql = require('mysql');
var properties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'
}
var connection = mysql.createConnection(
    properties
)

connection.connect();

module.exports = connection