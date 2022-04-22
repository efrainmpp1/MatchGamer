const express = require("express")
const UserControllers = require("./Controllers/UserControllers")
const routes = express.Router()

routes.get('/' , (req,res) => {
  return res.send("<h1>Index Api-Node</h1>")
})

routes.get('/users' , UserControllers.readAll)
routes.get('/user/:id' , UserControllers.readOne)
routes.post('/users' , UserControllers.cadastrar)
routes.put('/user/:id' , UserControllers.update)
routes.delete('/user/:id' , UserControllers.delete)

module.exports = routes