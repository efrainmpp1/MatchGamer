'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Games', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      tittle: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      genero:{
        type: Sequelize.STRING,
        allowNull:false
      },
      sobre:{
        type: Sequelize.STRING
      },
      plataformas:{
        type: Sequelize.STRING,
        allowNull: false
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    });
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Games');
     
  }
};
