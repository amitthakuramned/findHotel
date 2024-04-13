'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class flight_data_BOM_BLR extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  flight_data_BOM_BLR.init({
    FlightName: DataTypes.STRING,
    FlightCode: DataTypes.STRING,
    DepartingCity: DataTypes.STRING,
    DepartingTime: DataTypes.STRING,
    ArrivingCity: DataTypes.STRING,
    ArrivingTime: DataTypes.STRING,
    Duration: DataTypes.STRING,
    Price: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'flight_data_BOM_BLR',
    timestamps: true, // Automatically includes createdAt and updatedAt columns
    updatedAt: false, // If you don't want to update updatedAt column
  });
  return flight_data_BOM_BLR;
};
