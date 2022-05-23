const {Model, DataTypes} = require("sequelize")

class User extends Model {
  static init(connection){
    super.init({
      id: {
        type: DataTypes.STRING,
        primaryKey : true
      },
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },{
      sequelize: connection
    })
  }

  static associate(models){
    this.belongsToMany(models.Game , {
      foreignKey: 'user_id',
      through: 'User_Games',
      as: 'games'
    })
    this.belongsToMany(models.Grupo , {
      foreignKey: 'user_id' , 
      through: 'UserGroups',
      as: 'grupos'
    })
  }
}

module.exports = User;