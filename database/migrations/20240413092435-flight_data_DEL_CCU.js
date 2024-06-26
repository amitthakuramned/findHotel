'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.sequelize.query(`
  CREATE TABLE "flight_data_DEL_CCU" (
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

INSERT INTO public."flight_data_DEL_CCU" ("FlightName","FlightCode","DepartingCity","DepartingTime","ArrivingCity","ArrivingTime","Duration","Price")
VALUES
('IndiGo','6E 2284','New Delhi','05:25','Kolkata','07:55','02 h 30 m',5408),
('Vistara','UK 747','New Delhi','06:15','Kolkata','08:25','02 h 10 m',5408),
('IndiGo','6E 5219','New Delhi','06:25','Kolkata','08:35','02 h 10 m',5408),
('IndiGo','6E 6182','New Delhi','15:55','Kolkata','18:10','02 h 15 m',5408),
('IndiGo','6E 2415','New Delhi','17:45','Kolkata','20:00','02 h 15 m',5408),
('IndiGo','6E 2415','New Delhi','17:45','Kolkata','20:00','02 h 15 m',5408),
('IndiGo','6E 2415','New Delhi','17:45','Kolkata','20:00','02 h 15 m',5408),
('IndiGo','6E 2057','New Delhi','19:00','Kolkata','21:05','02 h 05 m',5408),
('IndiGo','6E 2057','New Delhi','19:00','Kolkata','21:05','02 h 05 m',5408),
('SpiceJet','SG 8251','New Delhi','19:30','Kolkata','21:40','02 h 10 m',5408),
('IndiGo','6E 2517','New Delhi','20:30','Kolkata','22:40','02 h 10 m',5408),
('IndiGo','6E 6005','New Delhi','22:50','Kolkata','01:00
+ 1 DAY','02 h 10 m',5408),
('IndiGo','6E 2603','New Delhi','23:50','Kolkata','02:05
+ 1 DAY','02 h 15 m',5408),
('Vistara','UK 737','New Delhi','15:45','Kolkata','18:05','02 h 20 m',5440),
('Vistara','UK 737','New Delhi','15:45','Kolkata','18:05','02 h 20 m',5440),
('Air India','AI 767','New Delhi','12:20','Kolkata','14:30','02 h 10 m',5492),
('Air India','AI 764','New Delhi','17:05','Kolkata','19:15','02 h 10 m',5492),
('Air India','AI 764','New Delhi','17:05','Kolkata','19:15','02 h 10 m',5492),
('Air India','AI 762','New Delhi','21:00','Kolkata','23:30','02 h 30 m',5492),
('IndiGo','6E 2788','New Delhi','02:55','Kolkata','05:10','02 h 15 m',5849),
('IndiGo','6E 2788','New Delhi','02:55','Kolkata','05:10','02 h 15 m',5849),
('IndiGo','6E 282','New Delhi','10:10','Kolkata','12:10','02 h',5849),
('IndiGo','6E 6557','New Delhi','13:00','Kolkata','15:00','02 h',5849),
('Vistara','UK 707','New Delhi','17:35','Kolkata','19:35','02 h',5881),
('SpiceJet','SG 8263','New Delhi','07:10','Kolkata','09:30','02 h 20 m',5986),
('Air India','AI 401','New Delhi','06:55','Kolkata','09:00','02 h 05 m',6374),
('Air India','AI 401','New Delhi','06:55','Kolkata','09:00','02 h 05 m',6374),
('Vistara','UK 705','New Delhi','07:40','Kolkata','09:45','02 h 05 m',8474),
('Vistara','UK 727','New Delhi','20:30','Kolkata','22:20','01 h 50 m',10469),
('IndiGo','6E 5213','New Delhi','09:00','Kolkata','11:05','02 h 05 m',15298),
('IndiGo','6E 5214','Kolkata','05:25','New Delhi','07:50','02 h 25 m',6020),
('IndiGo','6E 375','Kolkata','07:00','New Delhi','09:15','02 h 15 m',6020),
('IndiGo','6E 6183','Kolkata','18:55','New Delhi','21:10','02 h 15 m',6020),
('IndiGo','6E 898','Kolkata','19:35','New Delhi','21:55','02 h 20 m',6020),
('IndiGo','6E 2224','Kolkata','20:55','New Delhi','23:10','02 h 15 m',6020),
('IndiGo','6E 2224','Kolkata','20:55','New Delhi','23:10','02 h 15 m',6020),
('IndiGo','6E 2224','Kolkata','20:55','New Delhi','23:10','02 h 15 m',6020),
('IndiGo','6E 2716','Kolkata','21:45','New Delhi','00:05
+ 1 DAY','02 h 20 m',6020),
('IndiGo','6E 2716','Kolkata','21:45','New Delhi','00:05
+ 1 DAY','02 h 20 m',6020),
('SpiceJet','SG 8265','Kolkata','22:20','New Delhi','00:30
+ 1 DAY','02 h 10 m',6020),
('IndiGo','6E 2746','Kolkata','23:45','New Delhi','02:00
+ 1 DAY','02 h 15 m',6020),
('Air India','AI 763','Kolkata','06:55','New Delhi','09:15','02 h 20 m',6063),
('Vistara','UK 778','Kolkata','15:15','New Delhi','17:50','02 h 35 m',6063),
('Air India','AI 768','Kolkata','15:25','New Delhi','18:10','02 h 45 m',6063),
('Air India','AI 768','Kolkata','15:25','New Delhi','18:10','02 h 45 m',6063),
('Air India','AI 770','Kolkata','20:00','New Delhi','22:35','02 h 35 m',6063),
('SpiceJet','SG 8373','Kolkata','10:50','New Delhi','13:10','02 h 20 m',6064),
('SpiceJet','SG 8373','Kolkata','10:50','New Delhi','13:10','02 h 20 m',6064),
('Vistara','UK 720','Kolkata','07:10','New Delhi','09:35','02 h 25 m',6095),
('Vistara','UK 706','Kolkata','10:25','New Delhi','12:40','02 h 15 m',6095),
('Vistara','UK 706','Kolkata','10:25','New Delhi','12:40','02 h 15 m',6095),
('Vistara','UK 738','Kolkata','18:45','New Delhi','21:20','02 h 35 m',6095),
('Vistara','UK 708','Kolkata','20:30','New Delhi','23:00','02 h 30 m',6095),
('IndiGo','6E 2513','Kolkata','08:30','New Delhi','10:55','02 h 25 m',6212),
('IndiGo','6E 2759','Kolkata','15:40','New Delhi','18:00','02 h 20 m',6212),
('IndiGo','6E 2345','Kolkata','10:10','New Delhi','12:30','02 h 20 m',6420),
('IndiGo','6E 2345','Kolkata','10:10','New Delhi','12:30','02 h 20 m',6420),
('IndiGo','6E 2358','Kolkata','11:40','New Delhi','14:00','02 h 20 m',6420),
('Air India','AI 769','Kolkata','10:00','New Delhi','12:20','02 h 20 m',8100),
('IndiGo','6E 2516','Kolkata','16:45','New Delhi','19:05','02 h 20 m',11820);

  `)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("flight_data_DEL_CCU")
  }
};
