const {Model, DataTypes} = require("sequelize")

class Grupo extends Model{
  static init(connection){
    super.init({
      name: DataTypes.STRING
    },{
      sequelize: connection
    })
  }
  static associate(models){
    this.belongsToMany(models.User , {
      foreignKey: 'grupo_id' , 
      through: 'UserGroups',
      as: 'users'
    })
  }

}

module.exports = Grupo;