"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE TABLE "hyderabadHotels" (
      "id" SERIAL PRIMARY KEY,
      "Hotel Name" text,
      "Rating" double precision,
      "Rating Description" text,
      "Reviews" bigint,
      "Star Rating" bigint NULL,
      "Location" text,
      "Nearest Landmark" text NULL,
      "Distance to Landmark" text NULL,
      "Price" bigint,
      "Tax" text NULL,
      "destination_id" bigint,
      "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    INSERT INTO public."hyderabadHotels" ("Hotel Name","Rating","Rating Description","Reviews","Star Rating","Location","Nearest Landmark","Distance to Landmark","Price","Tax","destination_id")
    VALUES
    ('Radisson Hyderabad Hitec City',3.7,'Very Good',7994,5,'Gachibowli',NULL,NULL,4500,NULL,500001),
    ('The Park Hyderabad',3.7,'Very Good',11318,5,'Somajiguda',NULL,NULL,5699,'1,284',500001),
    ('ITC Kohenur - A Luxury Collection Hotel',4.3,'Excellent',2465,5,'Hitech City',NULL,NULL,16150,NULL,500001),
    ('Fairfield by Marriott Hyderabad Gachibowli',3.9,'Very Good',5006,4,'Gachibowli',NULL,NULL,4004,'818',500001),
    ('Radisson Blu Plaza Hotel',4.1,'Very Good',4632,5,'Banjara Hills',NULL,NULL,7250,NULL,500001),
    ('Lemon Tree Hotel Gachibowli',4,'Very Good',5372,4,'Gachibowli',NULL,NULL,4183,'1,518',500001),
    ('Red Fox Hotel Hyderabad',3.9,'Very Good',4338,3,'Hitech City',NULL,NULL,2654,'1,050',500001),
    ('Lemon Tree Hotel, Banjara Hills, Hyderabad',4.1,'Very Good',2775,4,'Banjara Hills',NULL,NULL,2571,'933',500001),
    ('Taj Krishna, Hyderabad',4.5,'Excellent',1580,5,'Banjara Hills',NULL,NULL,8000,NULL,500001),
    ('Novotel Hyderabad Airport',3.9,'Very Good',1278,5,'Near Hyderabad Airport','Rajiv Gandhi International Airport','3.6 km',12999,NULL,500001),
    ('Rester Select Kukatpally',4,'Very Good',263,3,'Kukatpally',NULL,NULL,2463,'674',500001),
    ('The Golkonda Hotel',4.1,'Very Good',3981,4,'Masab Tank',NULL,NULL,5499,'660',500001),
    ('Trident Hyderabad',4.7,'Excellent',1517,5,'Hitech City',NULL,NULL,14250,NULL,500001),
    ('Ellaa Hotel Gachibowli',3.8,'Very Good',4341,4,'Gachibowli',NULL,NULL,3321,'678',500001),
    ('Lemon Tree Premier HITEC City Hyderabad',4,'Very Good',5148,5,'Hitech City',NULL,NULL,3151,'1,246',500001),
    ('Siri Inn Hospitality | Rooms in an Apartment
    Like a 3',3.6,'Very Good',681,NULL,'Hitech City',NULL,NULL,1287,'373',500001),
    ('ibis Hyderabad HITEC City - An Accor Brand',3.8,'Very Good',1016,3,'Hitech City',NULL,NULL,4499,NULL,500001),
    ('Hyatt Place Hyderabad Banjara Hills',4.1,'Very Good',1695,5,'Banjara Hills',NULL,NULL,7249,NULL,500001),
    ('Vivanta Hyderabad, Begumpet',4.4,'Excellent',2743,5,'Begumpet',NULL,NULL,6500,NULL,500001),
    ('Zen Comfort',4,'Very Good',300,NULL,'Gachibowli',NULL,NULL,1438,'387',500001),
    ('Hyderabad Marriott Hotel and Convention Centre',4.3,'Excellent',1240,5,'Kavadiguda',NULL,NULL,6500,NULL,500001),
    ('HOTEL SIGNATURE AIRPORT ZONE SHAMSHABAD',4.1,'Very Good',2343,3,'Shamshabad','Rajiv Gandhi International Airport','8.5 km',2217,'571',500001),
    ('Daspalla Hotel',4.1,'Very Good',1948,4,'Jubilee Hills',NULL,NULL,5413,'1,386',500001),
    ('Hotel OAK by Signature',4.2,'Very Good',1722,3,'Shamshabad','Rajiv Gandhi International Airport','8.5 km',1317,'346',500001),
    ('Aditya Park Hyderabad - A Sarovar Hotel',4,'Very Good',2503,4,'Ameerpet',NULL,NULL,6111,'1,248',500001),
    ('Park Hyatt Hotel and Residences, Hyderabad',4.2,'Very Good',874,5,'Sri Nagar Colony',NULL,NULL,10000,NULL,500001),
    ('Marigold By Green Park',4.3,'Excellent',2477,5,'Ameerpet',NULL,NULL,5714,'1,485',500001),
    ('Hotel Hyderabad Grand',3.8,'Very Good',1599,3,'Shamshabad','Rajiv Gandhi International Airport','7.6 km',3028,'756',500001),
    ('Green Park',4.2,'Very Good',1864,4,'Ameerpet',NULL,NULL,5122,'1,267',500001),
    ('The Central Court',3.6,'Very Good',3819,3,'Lakdikapul',NULL,NULL,2041,'566',500001),
    ('Holiday Inn Express Hyderabad HITEC City',3.5,'Very Good',1894,3,'Hitech City',NULL,NULL,4499,NULL,500001),
    ('Slackpackr Hostel',4.1,'Very Good',87,NULL,'Begumpet',NULL,NULL,849,'237',500001),
    ('Holiday Inn Express Hyderabad Banjara Hills',3.5,'Very Good',2359,3,'Punjagutta',NULL,NULL,4140,'540',500001),
    ('CITADEL Hotel By Vinnca',4.1,'Very Good',949,3,'Gaghan Pahad',NULL,NULL,2932,'802',500001),
    ('Aditya Hometel Hyderabad - A Sarovar Hotel',3.5,'Very Good',2234,3,'Ameerpet',NULL,NULL,1860,'380',500001),
    ('Hotel Deccan Serai Grande',4.4,'Excellent',517,4,'Gachibowli',NULL,NULL,7014,'2,297',500001),
    ('Katriya Hotel and Towers',2.8,'Average',3250,3,'Somajiguda',NULL,NULL,3761,'451',500001),
    ('Hotel Saptagiri Hyderabad',3.8,'Very Good',2861,3,'Shivaji Nagar','Secunderabad Junction Railway Station','760 m',2724,'614',500001),
    ('Hampshire Plaza Hotel',3.8,'Very Good',1680,3,'Lakdikapul',NULL,NULL,3379,'891',500001),
    ('Taj Deccan, Hyderabad',4.4,'Excellent',2694,5,'Banjara Hills',NULL,NULL,6990,NULL,500001),
    ('Avasa Hotel',4.2,'Very Good',2073,5,'Madhapur',NULL,NULL,6696,'1,368',500001),
    ('Hotel Akoya - HITECH City Hyderabad',4.1,'Very Good',520,3,'Hitech City',NULL,NULL,2471,'681',500001),
    ('MARIGOLD AT NEST',3.8,'Very Good',93,2,'Gachibowli',NULL,NULL,1346,'307',500001),
    ('HOTEL RAINTR33',3.8,'Very Good',1012,3,'Hitech City',NULL,NULL,2011,'550',500001),
    ('Urban Nest Luxury Rooms',3.9,'Very Good',206,NULL,'Kokapet',NULL,NULL,1046,'357',500001),
    ('Novotel Hyderabad Convention Centre',4.2,'Very Good',2033,5,'Hitech City',NULL,NULL,10500,NULL,500001),
    ('Hotel B Plus L',4,'Very Good',866,4,'Hitech City',NULL,NULL,3360,'795',500001),
    ('La Hometel Hotel - HITECH City Hyderabad',3.9,'Very Good',236,3,'Hitech City',NULL,NULL,1435,'387',500001),
    ('Le Meridien Hyderabad',4.3,'Excellent',1059,5,'Gachibowli',NULL,NULL,10500,NULL,500001),
    ('Restel Studio Flats
    Like a 3',4.2,'Very Good',262,NULL,'Borabanda',NULL,NULL,1801,'504',500001),
    ('The Conclave',3.2,'Good',958,3,'Gachibowli',NULL,NULL,1613,'497',500001),
    ('The Landmark Banjara Hills',4,'Very Good',613,3,'Banjara Hills',NULL,NULL,1696,'437',500001),
    ('THE CENT',3.3,'Good',1544,3,'Lakdikapul',NULL,NULL,1662,'389',500001),
    ('Courtyard by Marriott Hyderabad',4.5,'Excellent',981,4,'Kavadiguda',NULL,NULL,6000,NULL,500001),
    ('The Wilderness Retreat | Rooms & Restaurant
    Like a 4',3.9,'Very Good',220,NULL,'Gandipet',NULL,NULL,7346,'2,197',500001),
    ('The Altruist Business Hotel (Hitech)',3.7,'Very Good',1888,4,'Shilpa Hills',NULL,NULL,4278,'1,028',500001),
    ('Istay Hotels Hitec',3.7,'Very Good',1236,3,'Kondapur',NULL,NULL,2913,'613',500001),
    ('Hyatt Hyderabad Gachibowli',4.1,'Very Good',864,5,'Gachibowli',NULL,NULL,8750,NULL,500001),
    ('The Art Boutique Hotel',3.8,'Very Good',1515,3,'Gachibowli',NULL,NULL,2197,'677',500001),
    ('Hotel Imperial Classic',3.9,'Very Good',2183,3,'Himayat Nagar',NULL,NULL,1068,'315',500001),
    ('Mercure Hyderabad KCP - An AccorHotels brand',4.2,'Very Good',773,4,'Punjagutta',NULL,NULL,5000,NULL,500001),
    ('Veeraj Suites',4,'Very Good',435,3,'Rai Durg',NULL,NULL,2170,'599',500001),
    ('Bloom Hotel - Gachibowli',4.1,'Very Good',181,3,'Gachibowli',NULL,NULL,4500,NULL,500001),
    ('Oakwood Residence Kapil Hyderabad',4.5,'Excellent',957,NULL,'Gachibowli',NULL,NULL,7500,NULL,500001),
    ('Aalankrita Resort & Convention',4.1,'Very Good',3109,4,'Secunderabad','city centre','26.5 km',4484,'916',500001),
    ('Minerva Grand- Kondapur',3.9,'Very Good',1019,3,'Kothaguda',NULL,NULL,4371,'893',500001),
    ('M SQUARE HOTEL',3.9,'Very Good',263,3,'Hitech City',NULL,NULL,4395,'898',500001),
    ('Sri Sri Suites',3.4,'Good',152,NULL,'Madhapur',NULL,NULL,1208,'330',500001),
    ('The Manohar',2.7,'Average',258,3,'Begumpet',NULL,NULL,3158,'645',500001),
    ('The Lime Boutique Suites',4.1,'Very Good',1434,3,'Gachibowli',NULL,NULL,2976,'608',500001),
    ('Taj Tristar',3.9,'Very Good',992,3,'Secunderabad','city centre','7.7 km',2271,'494',500001),
    ('Minerva Grand - Banjara',4,'Very Good',1453,3,'Banjara Hills',NULL,NULL,4464,'912',500001),
    ('Sheraton Hyderabad',4.3,'Excellent',769,5,'Gachibowli',NULL,NULL,125000,NULL,500001),
    ('ITC Kakatiya - A Luxury Collection Hotel',4.2,'Very Good',1071,5,'Begumpet',NULL,NULL,9690,NULL,500001),
    ('Bikanervala Boutique Hotel',4.1,'Very Good',1037,3,'Banjara Hills',NULL,NULL,3488,'713',500001);
    
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("hyderabadHotels");
  },
};
