const express = require("express")
const UserControllers = require("./Controllers/UserControllers")
const routes = express.Router()

routes.get('/' , (req,res) => {
  return res.send("<h1>Index Api-Node</h1>")
})

routes.get('/users' , UserControllers.readAll)

module.exports = routes