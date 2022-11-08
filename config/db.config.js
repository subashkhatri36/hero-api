const { Sequelize } = require("sequelize");

const {DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE,DB_DIALECT} =require('./index');


const db = new Sequelize(
    DB_DATABASE,
   DB_USER,
   '',
    {
      host: DB_HOST,
      dialect: DB_DIALECT
    }

  );

  module.exports= db;

