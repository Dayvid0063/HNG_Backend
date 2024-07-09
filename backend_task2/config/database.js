const { Sequelize } = require('sequelize');
const config = require('./config.json');
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
  logging: false,
});

module.exports = sequelize;
