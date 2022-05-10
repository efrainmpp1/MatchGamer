'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('User_Games', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id:{
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'Users' , key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      game_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model : 'Games' , key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      // Timestamps
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }, 
    });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('User_Games');
     
  }
};
