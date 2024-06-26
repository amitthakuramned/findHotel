"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE TABLE "flight_data_DEL_HYD" (
      "id" SERIAL PRIMARY KEY,
      "FlightName" TEXT,
      "FlightCode" TEXT,
      "DepartingCity" TEXT,
      "DepartingTime" TEXT,
      "ArrivingCity" TEXT,
      "ArrivingTime" TEXT,
      "Duration" TEXT,
      "Price" BIGINT,
      "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    INSERT INTO public."flight_data_DEL_HYD" ("FlightName","FlightCode","DepartingCity","DepartingTime","ArrivingCity","ArrivingTime","Duration","Price")
    VALUES
    ('Akasa Air','QP 1406','New Delhi','12:45','Hyderabad','15:05','02 h 20 m',4548),
    ('IndiGo','6E 2461','New Delhi','01:55','Hyderabad','04:10','02 h 15 m',4750),
    ('IndiGo','6E 2337','New Delhi','05:40','Hyderabad','07:55','02 h 15 m',4750),
    ('IndiGo','6E 6203','New Delhi','06:30','Hyderabad','08:40','02 h 10 m',4750),
    ('Air India','AI 560','New Delhi','07:10','Hyderabad','09:20','02 h 10 m',4750),
    ('Air India','AI 560','New Delhi','07:10','Hyderabad','09:20','02 h 10 m',4750),
    ('Air India','AI 560','New Delhi','07:10','Hyderabad','09:20','02 h 10 m',4750),
    ('IndiGo','6E 774','New Delhi','08:10','Hyderabad','10:20','02 h 10 m',4750),
    ('IndiGo','6E 774','New Delhi','08:10','Hyderabad','10:20','02 h 10 m',4750),
    ('Air India','AI 542','New Delhi','09:30','Hyderabad','12:00','02 h 30 m',4750),
    ('IndiGo','6E 2005','New Delhi','10:10','Hyderabad','12:15','02 h 05 m',4750),
    ('Air India','AI 522','New Delhi','11:05','Hyderabad','13:25','02 h 20 m',4750),
    ('IndiGo','6E 837','New Delhi','13:30','Hyderabad','15:45','02 h 15 m',4750),
    ('IndiGo','6E 2187','New Delhi','15:05','Hyderabad','17:20','02 h 15 m',4750),
    ('IndiGo','6E 2187','New Delhi','15:05','Hyderabad','17:20','02 h 15 m',4750),
    ('Air India','AI 544','New Delhi','17:00','Hyderabad','19:10','02 h 10 m',4750),
    ('IndiGo','6E 5312','New Delhi','17:15','Hyderabad','19:25','02 h 10 m',4750),
    ('IndiGo','6E 5312','New Delhi','17:15','Hyderabad','19:25','02 h 10 m',4750),
    ('IndiGo','6E 2341','New Delhi','18:45','Hyderabad','21:00','02 h 15 m',4750),
    ('IndiGo','6E 605','New Delhi','19:45','Hyderabad','22:00','02 h 15 m',4750),
    ('IndiGo','6E 605','New Delhi','19:45','Hyderabad','22:00','02 h 15 m',4750),
    ('IndiGo','6E 2371','New Delhi','21:25','Hyderabad','23:40','02 h 15 m',4750),
    ('Air India','AI 839','New Delhi','21:30','Hyderabad','23:45','02 h 15 m',4750),
    ('Vistara','UK 879','New Delhi','17:35','Hyderabad','19:50','02 h 15 m',4873),
    ('Vistara','UK 859','New Delhi','10:25','Hyderabad','12:35','02 h 10 m',4904),
    ('Vistara','UK 899','New Delhi','14:45','Hyderabad','17:00','02 h 15 m',4925),
    ('Vistara','UK 899','New Delhi','14:45','Hyderabad','17:00','02 h 15 m',4925),
    ('SpiceJet','SG 8164','New Delhi','23:00','Hyderabad','01:00
    + 1 DAY','02 h',4981),
    ('Vistara','UK 829','New Delhi','07:20','Hyderabad','09:30','02 h 10 m',5692),
    ('Vistara','UK 871','New Delhi','20:35','Hyderabad','22:55','02 h 20 m',6343),
    ('Akasa Air','QP 1407','Hyderabad','19:25','New Delhi','21:45','02 h 20 m',4979),
    ('IndiGo','6E 379','Hyderabad','05:05','New Delhi','07:25','02 h 20 m',4986),
    ('IndiGo','6E 491','Hyderabad','09:30','New Delhi','11:50','02 h 20 m',4986),
    ('IndiGo','6E 2171','Hyderabad','11:55','New Delhi','14:05','02 h 10 m',4986),
    ('IndiGo','6E 2063','Hyderabad','14:25','New Delhi','16:45','02 h 20 m',4986),
    ('IndiGo','6E 2063','Hyderabad','14:25','New Delhi','16:45','02 h 20 m',4986),
    ('IndiGo','6E 2063','Hyderabad','14:25','New Delhi','16:45','02 h 20 m',4986),
    ('IndiGo','6E 2003','Hyderabad','18:15','New Delhi','20:30','02 h 15 m',4986),
    ('IndiGo','6E 2003','Hyderabad','18:15','New Delhi','20:30','02 h 15 m',4986),
    ('IndiGo','6E 5605','Hyderabad','21:55','New Delhi','00:05
    + 1 DAY','02 h 10 m',4986),
    ('IndiGo','6E 6146','Hyderabad','22:45','New Delhi','01:00
    + 1 DAY','02 h 15 m',4986),
    ('Air India','AI 543','Hyderabad','10:05','New Delhi','12:30','02 h 25 m',5052),
    ('IndiGo','6E 2011','Hyderabad','06:45','New Delhi','09:00','02 h 15 m',5210),
    ('IndiGo','6E 2342','Hyderabad','08:40','New Delhi','10:45','02 h 05 m',5210),
    ('IndiGo','6E 2342','Hyderabad','08:40','New Delhi','10:45','02 h 05 m',5210),
    ('IndiGo','6E 6606','Hyderabad','16:30','New Delhi','18:50','02 h 20 m',5210),
    ('Vistara','UK 880','Hyderabad','13:15','New Delhi','15:35','02 h 20 m',5401),
    ('Vistara','UK 880','Hyderabad','13:15','New Delhi','15:35','02 h 20 m',5401),
    ('Vistara','UK 890','Hyderabad','17:40','New Delhi','19:55','02 h 15 m',5453),
    ('Air India','AI 559','Hyderabad','06:15','New Delhi','08:45','02 h 30 m',5472),
    ('Air India','AI 559','Hyderabad','06:15','New Delhi','08:45','02 h 30 m',5472),
    ('Air India','AI 523','Hyderabad','14:10','New Delhi','16:35','02 h 25 m',5472),
    ('Air India','AI 541','Hyderabad','16:25','New Delhi','18:50','02 h 25 m',5472),
    ('Air India','AI 840','Hyderabad','20:50','New Delhi','23:20','02 h 30 m',5472),
    ('SpiceJet','SG 160','Hyderabad','06:10','New Delhi','08:25','02 h 15 m',5629),
    ('Vistara','UK 830','Hyderabad','10:10','New Delhi','12:30','02 h 20 m',5905),
    ('Vistara','UK 830','Hyderabad','10:10','New Delhi','12:30','02 h 20 m',5905),
    ('Vistara','UK 860','Hyderabad','07:00','New Delhi','08:55','01 h 55 m',7585),
    ('Vistara','UK 870','Hyderabad','20:35','New Delhi','22:45','02 h 10 m',7606);
    
`);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("flight_data_DEL_HYD");
  },
};
