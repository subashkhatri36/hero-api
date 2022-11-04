var mysql = require('mysql');

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} =require('./index');


//mysql connection 

var connectDB = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database:DB_DATABASE,
    multipleStatements: true
});
connectDB.connect(function (err) {
    if (err) throw err;
    
    
});




module.exports=connectDB;