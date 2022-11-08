const { Sequelize, DataTypes, Model } = require('sequelize');
const sequlize = require('../config/db.config');


class SuperHero extends Model {}

SuperHero.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
  
  name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  powerstat: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  image: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  description: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize: sequlize,
  modelName: 'SuperHero'
 
 
});
sequlize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    sequlize.sync({ force: true });
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
  
 

  module.exports= SuperHero;