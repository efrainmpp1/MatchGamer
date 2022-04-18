const User = require("../Models/User")

module.exports = {
  async readAll(req,res){
    const users = await User.findAll()
    return res.json({users})
  }
}
