'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('UserGroups', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id:{
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'Users' , key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      grupo_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Grupos' , key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
     
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('UserGroups');
    
  }
};
