'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('regionais', [
        {  codigo: 1,   descricao: "Regional 1",    uf: "MS",createdAt: new Date(),
            updatedAt: new Date()},
        {  codigo: 2,   descricao: "Regional 2",    uf: "MS" ,createdAt: new Date(),
            updatedAt: new Date()},
      ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('regionais', null, {});

  }
};
