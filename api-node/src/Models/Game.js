const {Model, DataTypes} = require("sequelize")

class Game extends Model{
  static init(connection){
    super.init({
      tittle: DataTypes.STRING,
      genero: DataTypes.STRING,
      sobre: DataTypes.STRING,
      plataformas: DataTypes.STRING

    },{
      sequelize: connection
    })
  }
  
  static associate(models){
    this.belongsToMany(models.User , {
      foreignKey: 'game_id',
      through: 'User_Games',
      as: 'users'
    })
  }
}

module.exports = Game;