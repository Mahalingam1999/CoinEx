const mysql = require('mysql');

//SQL connection
const db = mysql.createConnection({
     host: 'localhost',
     user: 'manager',
     password: 'password',
     database: 'lt8rix0txswy3kn8',
     multipleStatements: true,
     port: 3306,
 });


db.connect(function(err) {
    if (err) throw err;
});

module.exports.db = db;
