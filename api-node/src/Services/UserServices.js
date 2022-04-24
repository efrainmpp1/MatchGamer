const User = require("../Models/User")

class UserServices {

  async usernameExists(username){
    const existe = await User.findOne({where: {username: username}}) ? true : false
    return existe
  }

}

module.exports = new UserServices