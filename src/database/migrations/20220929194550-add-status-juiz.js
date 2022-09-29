'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.addColumn('juizes', 'status',{
        type: Sequelize.ENUM('ATIVO', 'INATIVO'),
        allowNull: false,
        defaultValue: 'ATIVO'

      });

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.removeColumn('juizes', 'status');

  }
};
