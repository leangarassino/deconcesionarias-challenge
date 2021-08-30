"use strict";
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "John",
        email: "example@example.com",
        password: `${bcrypt.hashSync("123456", 10)}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pedro",
        email: "pedro@example.com",
        password: `${bcrypt.hashSync("123456", 10)}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Juan",
        email: "juan@example.com",
        password: `${bcrypt.hashSync("123456", 10)}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
