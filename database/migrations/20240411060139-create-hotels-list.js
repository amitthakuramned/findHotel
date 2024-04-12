'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HotelLists', {
      id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      crawl_timestamp: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      package_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      page_url: {
        type: Sequelize.STRING(311),
        allowNull: true,
        defaultValue: null
      },
      package_type: {
        type: Sequelize.STRING(128),
        allowNull: true,
        defaultValue: null
      },
      company: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      destination: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      itinerary: {
        type: Sequelize.STRING(143),
        allowNull: true,
        defaultValue: null
      },
      places_covered: {
        type: Sequelize.STRING(118),
        allowNull: true,
        defaultValue: null
      },
      trave_date: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      hotel_details: {
        type: Sequelize.STRING(326),
        allowNull: true,
        defaultValue: null
      },
      start_city: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      airline: {
        type: Sequelize.STRING(161),
        allowNull: true,
        defaultValue: null
      },
      flight_stops: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      onwards_return_flight_time: {
        type: Sequelize.STRING(175),
        allowNull: true,
        defaultValue: null
      },
      meals: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      price_per_two_persons: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      per_person_price: {
        type: Sequelize.DECIMAL(7, 1),
        allowNull: true,
        defaultValue: null
      },
      sightseeing_places_covered: {
        type: Sequelize.STRING(846),
        allowNull: true,
        defaultValue: null
      },
      initial_payment_for_booking: {
        type: Sequelize.STRING(1),
        allowNull: true,
        defaultValue: null
      },
      cancellation_rules: {
        type: Sequelize.STRING(2946),
        allowNull: true,
        defaultValue: null
      },
      date_change_rules: {
        type: Sequelize.STRING(173),
        allowNull: true,
        defaultValue: null
      },
      createdat: {
        type: Sequelize.STRING(1),
        allowNull: true,
        defaultValue: null
      },
      updatedat: {
        type: Sequelize.STRING(459),
        allowNull: true,
        defaultValue: null
      },
      unknowncolumn: {
        type: Sequelize.STRING(740),
        allowNull: true,
        defaultValue: null
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HotelLists');
  }
};
