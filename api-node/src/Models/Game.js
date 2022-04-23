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
}

module.exports = Game;