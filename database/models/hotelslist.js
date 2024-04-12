'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelsList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HotelsList.init({
    id:DataTypes.STRING,
    Crawl_Timestamp:DataTypes.STRING,
    Package_Name: DataTypes.STRING,
    Page_Url: DataTypes.STRING,
    Package_Type:  DataTypes.STRING,
    Company: DataTypes.STRING,
    Destination: DataTypes.STRING,
    Itinerary: DataTypes.STRING,
    Places_Covered: DataTypes.STRING,
    Trave_Date:DataTypes.STRING,
    Hotel_Details:DataTypes.STRING,
    Start_City: DataTypes.STRING,
    Airline:  DataTypes.STRING,
    Flight_Stops: DataTypes.STRING,
    Onwards_Return_Flight_Time:DataTypes.STRING,
    Meals: DataTypes.STRING,
    Price_Per_Two_Persons: DataTypes.DECIMAL,
    Per_Person_Price: DataTypes.DECIMAL,
    Sightseeing_Places_Covered: DataTypes.STRING,
    Initial_Payment_For_Booking:DataTypes.STRING,
    Cancellation_Rules:DataTypes.STRING,
    Date_Change_Rules: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HotelsList',
  });
  return HotelsList;
};