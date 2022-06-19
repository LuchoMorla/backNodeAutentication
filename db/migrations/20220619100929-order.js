'use strict';

const { ORDER_TABLE, OrderSchema } = require('.././models/orderModel'); 

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE, OrderSchema);
  }
};
