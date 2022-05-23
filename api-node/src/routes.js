const express = require("express")
const UserControllers = require("./Controllers/UserControllers")
const GamesControllers = require("./Controllers/GamesControllers")
const routes = express.Router()

routes.get('/' , (req,res) => {
  return res.send("<h1>Index Api-Node</h1>")
})

routes.get('/users' , UserControllers.readAll)
routes.get('/users/:id' , UserControllers.readOne)
routes.post('/users' , UserControllers.cadastrar)
routes.put('/users/:id' , UserControllers.update)
routes.delete('/users/:id' , UserControllers.delete)

routes.post('/login' , UserControllers.login)

routes.get('/games' , GamesControllers.readAll)
routes.get('/games/:id' , GamesControllers.readOne)
routes.post('/games',GamesControllers.cadastrar)
routes.put('/games/:id' , GamesControllers.update)

module.exports = routes