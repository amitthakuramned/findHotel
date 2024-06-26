"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the flight_data_DEL_BLR table
    await queryInterface.createTable("flight_data_DEL_BLR", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      FlightName: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      FlightCode: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      DepartingCity: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      DepartingTime: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ArrivingCity: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ArrivingTime: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      Duration: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      Price: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      // Define other columns here if needed
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Insert data into flight_data_DEL_BLR table
    await queryInterface.sequelize.query(`
    INSERT INTO public."flight_data_DEL_BLR" ("FlightName","FlightCode","DepartingCity","DepartingTime","ArrivingCity","ArrivingTime","Duration","Price")
    VALUES
    ('Akasa Air','QP 1409','New Delhi','23:00','Bengaluru','01:45
    + 1 DAY','02 h 45 m',5230),
    ('AirAsia','I5 740','New Delhi','07:50','Bengaluru','10:40','02 h 50 m',5235),
    ('AirAsia','I5 1534','New Delhi','22:55','Bengaluru','01:35
    + 1 DAY','02 h 40 m',5235),
    ('IndiGo','6E 2067','New Delhi','03:55','Bengaluru','06:45','02 h 50 m',5236),
    ('IndiGo','6E 6612','New Delhi','05:50','Bengaluru','08:35','02 h 45 m',5236),
    ('IndiGo','6E 6612','New Delhi','05:50','Bengaluru','08:35','02 h 45 m',5236),
    ('IndiGo','6E 6612','New Delhi','05:50','Bengaluru','08:35','02 h 45 m',5236),
    ('IndiGo','6E 2403','New Delhi','07:05','Bengaluru','09:50','02 h 45 m',5236),
    ('IndiGo','6E 2403','New Delhi','07:05','Bengaluru','09:50','02 h 45 m',5236),
    ('IndiGo','6E 308','New Delhi','08:00','Bengaluru','11:00','03 h',5236),
    ('IndiGo','6E 2131','New Delhi','21:45','Bengaluru','00:35
    + 1 DAY','02 h 50 m',5236),
    ('IndiGo','6E 6565','New Delhi','22:55','Bengaluru','01:40
    + 1 DAY','02 h 45 m',5236),
    ('Air India','AI 514','New Delhi','03:30','Bengaluru','06:25','02 h 55 m',5240),
    ('Air India','AI 803','New Delhi','06:10','Bengaluru','09:00','02 h 50 m',5240),
    ('Air India','AI 803','New Delhi','06:10','Bengaluru','09:00','02 h 50 m',5240),
    ('Air India','AI 504','New Delhi','21:10','Bengaluru','00:05
    + 1 DAY','02 h 55 m',5240),
    ('SpiceJet','SG 534','New Delhi','21:35','Bengaluru','00:10
    + 1 DAY','02 h 35 m',5297),
    ('SpiceJet','SG 534','New Delhi','21:35','Bengaluru','00:10
    + 1 DAY','02 h 35 m',5297),
    ('SpiceJet','SG 8143','New Delhi','23:55','Bengaluru','02:40
    + 1 DAY','02 h 45 m',5297),
    ('Akasa Air','QP 1350','New Delhi','21:00','Bengaluru','23:35','02 h 35 m',5400),
    ('Akasa Air','QP 1350','New Delhi','21:00','Bengaluru','23:35','02 h 35 m',5400),
    ('Air India','AI 813','New Delhi','08:00','Bengaluru','10:55','02 h 55 m',5503),
    ('IndiGo','6E 2338','New Delhi','20:55','Bengaluru','23:40','02 h 45 m',5599),
    ('Vistara','UK 813','New Delhi','17:40','Bengaluru','20:30','02 h 50 m',6028),
    ('IndiGo','6E 781','New Delhi','15:30','Bengaluru','18:20','02 h 50 m',6216),
    ('IndiGo','6E 2302','New Delhi','20:20','Bengaluru','23:05','02 h 45 m',6216),
    ('IndiGo','6E 2302','New Delhi','20:20','Bengaluru','23:05','02 h 45 m',6216),
    ('Air India','AI 502','New Delhi','13:40','Bengaluru','16:20','02 h 40 m',6343),
    ('Air India','AI 815','New Delhi','15:35','Bengaluru','18:35','03 h',6343),
    ('Air India','AI 807','New Delhi','17:00','Bengaluru','20:15','03 h 15 m',6343),
    ('Vistara','UK 811','New Delhi','06:15','Bengaluru','09:05','02 h 50 m',6448),
    ('Vistara','UK 817','New Delhi','16:05','Bengaluru','18:45','02 h 40 m',6448),
    ('Vistara','UK 817','New Delhi','16:05','Bengaluru','18:45','02 h 40 m',6448),
    ('IndiGo','6E 6383','New Delhi','11:45','Bengaluru','14:40','02 h 55 m',7020),
    ('IndiGo','6E 2514','New Delhi','13:15','Bengaluru','16:10','02 h 55 m',7020),
    ('IndiGo','6E 2487','New Delhi','17:15','Bengaluru','20:00','02 h 45 m',7020),
    ('IndiGo','6E 6622','New Delhi','18:55','Bengaluru','21:50','02 h 55 m',7020),
    ('Air India','AI 512','New Delhi','19:15','Bengaluru','22:35','03 h 20 m',7183),
    ('Air India','AI 512','New Delhi','19:15','Bengaluru','22:35','03 h 20 m',7183),
    ('IndiGo','6E 5608','New Delhi','09:20','Bengaluru','12:05','02 h 45 m',7450),
    ('IndiGo','6E 6797','New Delhi','10:40','Bengaluru','13:35','02 h 55 m',7450),
    ('Vistara','UK 819','New Delhi','14:10','Bengaluru','16:45','02 h 35 m',7498),
    ('Air India','AI 506','New Delhi','09:40','Bengaluru','12:30','02 h 50 m',8233),
    ('Vistara','UK 809','New Delhi','19:50','Bengaluru','22:40','02 h 50 m',8495),
    ('Vistara','UK 809','New Delhi','19:50','Bengaluru','22:40','02 h 50 m',8495),
    ('Vistara','UK 815','New Delhi','08:00','Bengaluru','10:50','02 h 50 m',13021),
    ('Vistara','UK 801','New Delhi','09:10','Bengaluru','11:50','02 h 40 m',13021),
    ('Vistara','UK 807','New Delhi','20:40','Bengaluru','23:20','02 h 40 m',13021),
    ('IndiGo','6E 6247','Bengaluru','04:25','New Delhi','07:15','02 h 50 m',5354),
    ('IndiGo','6E 5021','Bengaluru','05:35','New Delhi','08:25','02 h 50 m',5354),
    ('IndiGo','6E 6621','Bengaluru','15:20','New Delhi','18:15','02 h 55 m',5354),
    ('IndiGo','6E 5039','Bengaluru','16:45','New Delhi','19:35','02 h 50 m',5354),
    ('IndiGo','6E 2174','Bengaluru','18:00','New Delhi','20:45','02 h 45 m',5354),
    ('IndiGo','6E 2174','Bengaluru','18:00','New Delhi','20:45','02 h 45 m',5354),
    ('IndiGo','6E 2174','Bengaluru','18:00','New Delhi','20:45','02 h 45 m',5354),
    ('AirAsia','I5 1532','Bengaluru','19:10','New Delhi','22:05','02 h 55 m',5354),
    ('AirAsia','I5 1532','Bengaluru','19:10','New Delhi','22:05','02 h 55 m',5354),
    ('IndiGo','6E 735','Bengaluru','19:20','New Delhi','22:05','02 h 45 m',5354),
    ('IndiGo','6E 2406','Bengaluru','20:35','New Delhi','23:20','02 h 45 m',5354),
    ('Air India','AI 511','Bengaluru','14:55','New Delhi','18:20','03 h 25 m',5368),
    ('Air India','AI 509','Bengaluru','19:35','New Delhi','22:35','03 h',5368),
    ('Vistara','UK 820','Bengaluru','17:50','New Delhi','20:35','02 h 45 m',5513),
    ('Vistara','UK 820','Bengaluru','17:50','New Delhi','20:35','02 h 45 m',5513),
    ('Vistara','UK 818','Bengaluru','19:40','New Delhi','22:20','02 h 40 m',5513),
    ('Vistara','UK 814','Bengaluru','21:10','New Delhi','23:45','02 h 35 m',5513),
    ('Vistara','UK 814','Bengaluru','21:10','New Delhi','23:45','02 h 35 m',5513),
    ('Akasa Air','QP 1359','Bengaluru','04:30','New Delhi','07:10','02 h 40 m',5552),
    ('SpiceJet','SG 8136','Bengaluru','02:00','New Delhi','04:55','02 h 55 m',5596),
    ('SpiceJet','SG 8136','Bengaluru','02:00','New Delhi','04:55','02 h 55 m',5596),
    ('SpiceJet','SG 8198','Bengaluru','20:10','New Delhi','23:20','03 h 10 m',5596),
    ('Air India','AI 804','Bengaluru','05:45','New Delhi','08:40','02 h 55 m',5618),
    ('Air India','AI 503','Bengaluru','17:15','New Delhi','20:05','02 h 50 m',5618),
    ('IndiGo','6E 122','Bengaluru','07:00','New Delhi','09:45','02 h 45 m',5717),
    ('AirAsia','I5 741','Bengaluru','11:15','New Delhi','14:05','02 h 50 m',5717),
    ('AirAsia','I5 741','Bengaluru','11:15','New Delhi','14:05','02 h 50 m',5717),
    ('IndiGo','6E 2401','Bengaluru','13:50','New Delhi','16:35','02 h 45 m',5717),
    ('IndiGo','6E 2053','Bengaluru','23:15','New Delhi','02:10
    + 1 DAY','02 h 55 m',5717),
    ('Akasa Air','QP 1405','Bengaluru','09:15','New Delhi','12:05','02 h 50 m',5772),
    ('Vistara','UK 802','Bengaluru','18:45','New Delhi','21:25','02 h 40 m',5776),
    ('Air India','AI 501','Bengaluru','13:15','New Delhi','15:55','02 h 40 m',5881),
    ('Air India','AI 501','Bengaluru','13:15','New Delhi','15:55','02 h 40 m',5881),
    ('IndiGo','6E 871','Bengaluru','10:30','New Delhi','13:20','02 h 50 m',5992),
    ('Vistara','UK 868','Bengaluru','09:45','New Delhi','12:40','02 h 55 m',6196),
    ('Air India','AI 513','Bengaluru','07:05','New Delhi','10:00','02 h 55 m',6721),
    ('Air India','AI 505','Bengaluru','09:50','New Delhi','12:35','02 h 45 m',6721),
    ('IndiGo','6E 861','Bengaluru','08:00','New Delhi','10:45','02 h 45 m',7142),
    ('IndiGo','6E 861','Bengaluru','08:00','New Delhi','10:45','02 h 45 m',7142),
    ('IndiGo','6E 869','Bengaluru','12:00','New Delhi','14:45','02 h 45 m',7457),
    ('Air India','AI 507','Bengaluru','11:45','New Delhi','14:35','02 h 50 m',7561),
    ('Vistara','UK 810','Bengaluru','07:00','New Delhi','09:40','02 h 40 m',8926),
    ('Air India','AI 808','Bengaluru','21:00','New Delhi','23:55','02 h 55 m',10711),
    ('Vistara','UK 816','Bengaluru','11:30','New Delhi','14:10','02 h 40 m',10774),
    ('Vistara','UK 816','Bengaluru','11:30','New Delhi','14:10','02 h 40 m',10774),
    ('IndiGo','6E 2339','Bengaluru','00:30','New Delhi','03:20','02 h 50 m',12445),
    ('Vistara','UK 808','Bengaluru','08:00','New Delhi','10:35','02 h 35 m',13399);
    
    `);
  },

  async down(queryInterface, Sequelize) {
    // Drop the flight_data_DEL_BLR table if the migration is rolled back
    await queryInterface.dropTable("flight_data_DEL_BLR");
  },
};
