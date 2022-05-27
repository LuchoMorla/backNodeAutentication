const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = encodeURIComponent(config.dbHost);
const DATABASE = encodeURIComponent(config.dbName);
const PORT = encodeURIComponent(config.dbPort);
const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
  });
  
  setupModels(sequelize);
  
  sequelize.sync();
  
  module.exports = sequelize;