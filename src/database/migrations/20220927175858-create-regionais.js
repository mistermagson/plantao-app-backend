'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('regionais', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      codigo:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      descricao:{
        type: Sequelize.STRING,
        allowNull: false
      },
      uf: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
      },

    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('regionais');
  }
};
