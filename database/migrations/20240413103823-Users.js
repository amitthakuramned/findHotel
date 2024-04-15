'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE TABLE "Users" (
      "id" SERIAL PRIMARY KEY,
      "username" VARCHAR(255) NOT NULL,
      "email" VARCHAR(255) NOT NULL,
      "password" VARCHAR(255) NOT NULL,
      "location" VARCHAR(255),
      "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO public."Users" ("username", "email", "password", "location")
    VALUES
('john_doe', 'john@example.com', 'password123', 'New York'),
('jane_smith', 'jane@example.com', 'password456', 'Los Angeles'),
('mike_jones', 'mike@example.com', 'password789', 'Chicago');
    `)
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("Users")
  }
};
