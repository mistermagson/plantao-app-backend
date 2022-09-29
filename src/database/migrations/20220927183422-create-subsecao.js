'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subsecoes', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      subsecao:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      descricao:{
        type: Sequelize.STRING,
        allowNull: false
      },
      uf: {
        type: Sequelize.ENUM,
        values: ['MS', 'SP']
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      subsecao_id:{
        type: Sequelize.INTEGER,
        references: {model: "regional", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.dropTable('subsecoes');
  }
};
