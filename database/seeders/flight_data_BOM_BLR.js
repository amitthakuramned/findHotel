'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'flight_data_BOM_BLR#',
      [
        { FlightName: 'Air India', FlightCode: 'AI 621', DepartingCity: 'Mumbai', DepartingTime: '03:55', ArrivingCity: 'Bengaluru', ArrivingTime: '05:50', Duration: '01 h 55 m', Price: 2307 },
        { FlightName: 'AirAsia', FlightCode: 'I5 670', DepartingCity: 'Mumbai', DepartingTime: '19:55', ArrivingCity: 'Bengaluru', ArrivingTime: '21:45', Duration: '01 h 50 m', Price: 2773 },
        { FlightName: 'AirAsia', FlightCode: 'I5 2992', DepartingCity: 'Mumbai', DepartingTime: '23:55', ArrivingCity: 'Bengaluru', ArrivingTime: '01:45 + 1 DAY', Duration: '01 h 50 m', Price: 2773 },
      ],
      {}
    ),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('flight_data_BOM_BLR#', null, {}),
};
