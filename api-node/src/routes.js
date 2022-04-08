const express = require("express")

const routes = express.Router()

routes.get('/' , (req,res) => {
  return res.send("<h1>Index Api-Node</h1>")
})

module.exports = routes