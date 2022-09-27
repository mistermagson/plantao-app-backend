'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('juizes', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false
      },
      dataAntiguidade: {
        type: Sequelize.DATEONLY
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      regional_id:{
        type: Sequelize.INTEGER,
        references: {model: "regional", key:"id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('juizes');
  }
};
