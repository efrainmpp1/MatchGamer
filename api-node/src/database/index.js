const { Sequelize } = require("sequelize")
const db_config = require("../config/config")
const User = require("../Models/User")
const Game = require("../Models/Game")

const connection = new Sequelize(db_config)

connection.authenticate()
.then(() => {
  User.init(connection)
  Game.init(connection)
  console.log("Conexão com DB realizada com sucesso")
}).catch(() => {
  console.log("A conexão com o DB não pode ser realizada");
})

module.exports = connection