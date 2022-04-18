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
}

module.exports = User;