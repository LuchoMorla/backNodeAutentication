'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customerModel.js');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.drop(CUSTOMER_TABLE);
  }
};
