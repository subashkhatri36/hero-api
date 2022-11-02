var mysql = require('mysql');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} =require('./index');


//mysql connection 

var con = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database:DB_DATABASE,
    multipleStatements: true
});
con.connect(function (err) {
    if (err) throw err;
    console.log(`Connected to the database!`);
    
});


module.exports = {con};