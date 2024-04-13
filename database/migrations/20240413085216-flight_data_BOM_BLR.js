'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('flight_data_BOM_BLR', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      FlightName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      FlightCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      DepartingCity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      DepartingTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ArrivingCity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ArrivingTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Price: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('flight_data_BOM_BLR');
  }
};
