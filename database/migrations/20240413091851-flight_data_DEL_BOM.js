"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the flight_data_DEL_BLR table
    await queryInterface.sequelize.query(`
    CREATE TABLE "flight_data_DEL_BOM" (
      "id" SERIAL PRIMARY KEY,
      "FlightName" text,
      "FlightCode" text,
      "DepartingCity" text,
      "DepartingTime" text,
      "ArrivingCity" text,
      "ArrivingTime" text,
      "Duration" text,
      "Price" bigint,
      "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    INSERT INTO public."flight_data_DEL_BOM" ("FlightName","FlightCode","DepartingCity","DepartingTime","ArrivingCity","ArrivingTime","Duration","Price")
    VALUES
    ('Akasa Air','QP 1719','New Delhi','09:00','Mumbai','10:55','01 h 55 m',4758),
    ('Akasa Air','QP 1411','New Delhi','10:55','Mumbai','13:05','02 h 10 m',4758),
    ('Akasa Air','QP 1128','New Delhi','16:00','Mumbai','18:10','02 h 10 m',4758),
    ('IndiGo','6E 2009','New Delhi','01:00','Mumbai','03:00','02 h',4780),
    ('IndiGo','6E 2112','New Delhi','05:30','Mumbai','07:35','02 h 05 m',4780),
    ('IndiGo','6E 2112','New Delhi','05:30','Mumbai','07:35','02 h 05 m',4780),
    ('IndiGo','6E 2112','New Delhi','05:30','Mumbai','07:35','02 h 05 m',4780),
    ('IndiGo','6E 5218','New Delhi','06:30','Mumbai','08:50','02 h 20 m',4780),
    ('IndiGo','6E 5218','New Delhi','06:30','Mumbai','08:50','02 h 20 m',4780),
    ('IndiGo','6E 6814','New Delhi','07:15','Mumbai','09:20','02 h 05 m',4780),
    ('IndiGo','6E 2075','New Delhi','08:00','Mumbai','10:15','02 h 15 m',4780),
    ('Air India','AI 665','New Delhi','08:00','Mumbai','10:20','02 h 20 m',4780),
    ('IndiGo','6E 5112','New Delhi','09:00','Mumbai','10:55','01 h 55 m',4780),
    ('IndiGo','6E 2328','New Delhi','10:00','Mumbai','12:15','02 h 15 m',4780),
    ('IndiGo','6E 2328','New Delhi','10:00','Mumbai','12:15','02 h 15 m',4780),
    ('Air India','AI 865','New Delhi','10:00','Mumbai','12:30','02 h 30 m',4780),
    ('IndiGo','6E 824','New Delhi','11:00','Mumbai','13:00','02 h',4780),
    ('IndiGo','6E 824','New Delhi','11:00','Mumbai','13:00','02 h',4780),
    ('SpiceJet','SG 157','New Delhi','12:10','Mumbai','14:35','02 h 25 m',4780),
    ('IndiGo','6E 6092','New Delhi','12:55','Mumbai','15:05','02 h 10 m',4780),
    ('IndiGo','6E 6092','New Delhi','12:55','Mumbai','15:05','02 h 10 m',4780),
    ('Air India','AI 620','New Delhi','13:30','Mumbai','15:40','02 h 10 m',4780),
    ('Air India','AI 863','New Delhi','14:00','Mumbai','16:20','02 h 20 m',4780),
    ('IndiGo','6E 2176','New Delhi','14:20','Mumbai','16:30','02 h 10 m',4780),
    ('IndiGo','6E 2016','New Delhi','15:45','Mumbai','18:00','02 h 15 m',4780),
    ('IndiGo','6E 5197','New Delhi','16:30','Mumbai','18:40','02 h 10 m',4780),
    ('IndiGo','6E 5197','New Delhi','16:30','Mumbai','18:40','02 h 10 m',4780),
    ('Air India','AI 441','New Delhi','17:15','Mumbai','19:30','02 h 15 m',4780),
    ('IndiGo','6E 864','New Delhi','17:30','Mumbai','19:40','02 h 10 m',4780),
    ('IndiGo','6E 2017','New Delhi','18:30','Mumbai','20:35','02 h 05 m',4780),
    ('SpiceJet','SG 8709','New Delhi','18:55','Mumbai','21:25','02 h 30 m',4780),
    ('IndiGo','6E 2084','New Delhi','19:45','Mumbai','22:00','02 h 15 m',4780),
    ('IndiGo','6E 2084','New Delhi','19:45','Mumbai','22:00','02 h 15 m',4780),
    ('Air India','AI 805','New Delhi','20:00','Mumbai','22:10','02 h 10 m',4780),
    ('IndiGo','6E 6424','New Delhi','20:15','Mumbai','22:45','02 h 30 m',4780),
    ('IndiGo','6E 6083','New Delhi','21:00','Mumbai','23:05','02 h 05 m',4780),
    ('IndiGo','6E 2114','New Delhi','22:00','Mumbai','00:05
    + 1 DAY','02 h 05 m',4780),
    ('Air India','AI 814','New Delhi','22:30','Mumbai','00:45
    + 1 DAY','02 h 15 m',4780),
    ('Air India','AI 814','New Delhi','22:30','Mumbai','00:45
    + 1 DAY','02 h 15 m',4780),
    ('IndiGo','6E 2519','New Delhi','23:15','Mumbai','01:20
    + 1 DAY','02 h 05 m',4780),
    ('Vistara','UK 951','New Delhi','14:20','Mumbai','16:25','02 h 05 m',4880),
    ('Vistara','UK 995','New Delhi','10:20','Mumbai','12:35','02 h 15 m',4933),
    ('Vistara','UK 963','New Delhi','09:00','Mumbai','11:15','02 h 15 m',5038),
    ('Vistara','UK 993','New Delhi','12:50','Mumbai','15:00','02 h 10 m',5038),
    ('Vistara','UK 993','New Delhi','12:50','Mumbai','15:00','02 h 10 m',5038),
    ('SpiceJet','SG 8192','New Delhi','18:20','Mumbai','20:45','02 h 25 m',5042),
    ('Vistara','UK 945','New Delhi','11:40','Mumbai','13:50','02 h 10 m',5316),
    ('Air India','AI 605','New Delhi','21:15','Mumbai','23:35','02 h 20 m',5316),
    ('Vistara','UK 941','New Delhi','16:55','Mumbai','19:05','02 h 10 m',5744),
    ('Vistara','UK 999','New Delhi','21:55','Mumbai','00:10
    + 1 DAY','02 h 15 m',5744),
    ('IndiGo','6E 2111','Mumbai','02:30','New Delhi','04:40','02 h 10 m',4745),
    ('IndiGo','6E 2056','Mumbai','05:00','New Delhi','07:15','02 h 15 m',4745),
    ('IndiGo','6E 5187','Mumbai','06:05','New Delhi','08:10','02 h 05 m',4745),
    ('IndiGo','6E 2398','Mumbai','07:00','New Delhi','09:10','02 h 10 m',4745),
    ('Air India','AI 864','Mumbai','07:00','New Delhi','09:15','02 h 15 m',4745),
    ('Air India','AI 864','Mumbai','07:00','New Delhi','09:15','02 h 15 m',4745),
    ('Air India','AI 864','Mumbai','07:00','New Delhi','09:15','02 h 15 m',4745),
    ('IndiGo','6E 825','Mumbai','07:45','New Delhi','09:55','02 h 10 m',4745),
    ('IndiGo','6E 825','Mumbai','07:45','New Delhi','09:55','02 h 10 m',4745),
    ('Akasa Air','QP 1410','Mumbai','07:55','New Delhi','10:10','02 h 15 m',4745),
    ('IndiGo','6E 2139','Mumbai','08:30','New Delhi','10:40','02 h 10 m',4745),
    ('Air India','AI 866','Mumbai','09:00','New Delhi','11:20','02 h 20 m',4745),
    ('SpiceJet','SG 158','Mumbai','09:05','New Delhi','11:20','02 h 15 m',4745),
    ('IndiGo','6E 5008','Mumbai','09:30','New Delhi','11:40','02 h 10 m',4745),
    ('IndiGo','6E 5008','Mumbai','09:30','New Delhi','11:40','02 h 10 m',4745),
    ('Air India','AI 809','Mumbai','10:00','New Delhi','12:20','02 h 20 m',4745),
    ('Air India','AI 623','Mumbai','10:25','New Delhi','12:40','02 h 15 m',4745),
    ('Air India','AI 623','Mumbai','10:25','New Delhi','12:40','02 h 15 m',4745),
    ('IndiGo','6E 6821','Mumbai','10:30','New Delhi','12:50','02 h 20 m',4745),
    ('IndiGo','6E 5113','Mumbai','11:45','New Delhi','14:05','02 h 20 m',4745),
    ('IndiGo','6E 5113','Mumbai','11:45','New Delhi','14:05','02 h 20 m',4745),
    ('IndiGo','6E 2015','Mumbai','12:45','New Delhi','14:55','02 h 10 m',4745),
    ('Akasa Air','QP 1127','Mumbai','13:05','New Delhi','15:10','02 h 05 m',4745),
    ('IndiGo','6E 993','Mumbai','14:30','New Delhi','16:35','02 h 05 m',4745),
    ('Air India','AI 442','Mumbai','15:35','New Delhi','18:10','02 h 35 m',4745),
    ('IndiGo','6E 2326','Mumbai','15:45','New Delhi','17:55','02 h 10 m',4745),
    ('IndiGo','6E 2326','Mumbai','15:45','New Delhi','17:55','02 h 10 m',4745),
    ('Air India','AI 687','Mumbai','16:00','New Delhi','18:20','02 h 20 m',4745),
    ('IndiGo','6E 2103','Mumbai','17:15','New Delhi','19:25','02 h 10 m',4745),
    ('SpiceJet','SG 710','Mumbai','22:30','New Delhi','01:00
    + 1 DAY','02 h 30 m',4745),
    ('IndiGo','6E 2083','Mumbai','22:50','New Delhi','01:00
    + 1 DAY','02 h 10 m',4745),
    ('IndiGo','6E 2126','Mumbai','23:55','New Delhi','02:00
    + 1 DAY','02 h 05 m',4745),
    ('IndiGo','6E 2126','Mumbai','23:55','New Delhi','02:00
    + 1 DAY','02 h 05 m',4745),
    ('IndiGo','6E 6082','Mumbai','18:00','New Delhi','20:00','02 h',5184),
    ('Air India','AI 660','Mumbai','18:15','New Delhi','20:15','02 h',5281),
    ('Air India','AI 806','Mumbai','08:00','New Delhi','10:15','02 h 15 m',5919),
    ('IndiGo','6E 2113','Mumbai','19:00','New Delhi','21:10','02 h 10 m',6654),
    ('IndiGo','6E 2518','Mumbai','20:10','New Delhi','22:25','02 h 15 m',6654),
    ('IndiGo','6E 2518','Mumbai','20:10','New Delhi','22:25','02 h 15 m',6654),
    ('IndiGo','6E 2051','Mumbai','21:35','New Delhi','23:30','01 h 55 m',6654),
    ('SpiceJet','SG 8191','Mumbai','21:20','New Delhi','23:45','02 h 25 m',7422),
    ('Vistara','UK 928','Mumbai','06:30','New Delhi','08:35','02 h 05 m',10539),
    ('Vistara','UK 952','Mumbai','12:50','New Delhi','14:45','01 h 55 m',10539),
    ('Vistara','UK 944','Mumbai','14:40','New Delhi','16:55','02 h 15 m',10539),
    ('Vistara','UK 944','Mumbai','14:40','New Delhi','16:55','02 h 15 m',10539),
    ('Vistara','UK 902','Mumbai','15:45','New Delhi','18:10','02 h 25 m',10539),
    ('Vistara','UK 910','Mumbai','17:25','New Delhi','19:35','02 h 10 m',10539),
    ('Vistara','UK 996','Mumbai','18:30','New Delhi','20:40','02 h 10 m',10539),
    ('Vistara','UK 950','Mumbai','21:55','New Delhi','00:10
    + 1 DAY','02 h 15 m',10539),
    ('Vistara','UK 986','Mumbai','22:50','New Delhi','01:00
    + 1 DAY','02 h 10 m',10539);
    
    `);
  },

  async down(queryInterface, Sequelize) {
    // Drop the flight_data_DEL_BLR table if the migration is rolled back
    await queryInterface.dropTable("flight_data_DEL_BOM");
  },
};
