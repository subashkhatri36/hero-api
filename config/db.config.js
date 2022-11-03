var mysql = require('mysql');
const Sequelize = require("sequelize");


const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE,
    MAX,
    MIN,
    ACQUIRE,
    IDLE} =require('./index');


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
    console.log(`Connected to the database!`);
    
});



//seq


const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: MAX,
      min: MIN,
      acquire: ACQUIRE,
      idle: IDLE
    },
  });
  const db={};
  db.Sequelize=Sequelize;
  db.sequelize=sequelize;
  db.SuperHero=require('../models/superheroModel.js')(sequelize, Sequelize);

module.exports={connectDB,db};