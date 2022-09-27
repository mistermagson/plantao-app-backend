'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('escalas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataInicial: {
        type: Sequelize.DATE
      },
      dataFinal: {
        type: Sequelize.DATE
      },
      tipo: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: ['aberta', 'em fechamento', 'fechada']
      },
      plantonistas: {
        type: Sequelize.JSON // { dataPlantao: DATE, plantonista: <JUIZ> }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Escalas');
  }
};