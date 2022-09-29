'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('juizes', [
        { nome: "Dr. ANice", dataAntiguidade: "2020-01-01" , email:"aa@aa",createdAt: new Date(),
          updatedAt: new Date()},
        { nome: "Dr. BNice", dataAntiguidade: "2019-01-01" , email:"av@aa",createdAt: new Date(),
          updatedAt: new Date()},
        {  nome: "Dr. CNice", dataAntiguidade: "2018-01-01" , email:"ab@aa",createdAt: new Date(),
          updatedAt: new Date()},
        { nome: "Dr. DNice", dataAntiguidade: "2017-01-01" , email:"aa@na",createdAt: new Date(),
          updatedAt: new Date()},
        { nome: "Dr. ENice", dataAntiguidade: "2016-01-01"  , email:"am@aa",createdAt: new Date(),
          updatedAt: new Date()},
        {  nome: "Dr. FNice", dataAntiguidade: "2021-01-01"  , email:"ak@aa",createdAt: new Date(),
          updatedAt: new Date()},
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('juizes', null, {});

  }
};
