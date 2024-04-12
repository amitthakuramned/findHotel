'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
      queryInterface.bulkInsert(
          'HotelsLists',
          [
            
          ],
          {}
      ),
  down: (queryInterface, Sequelize) =>
      queryInterface.bulkDelete('HotelsLists', null, {}),
}
