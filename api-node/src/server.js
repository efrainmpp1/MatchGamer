const express = require("express")
const cors = require("cors")
const routes = require("./routes")
const PORT = 3333 //Futuramente será de uma variavel de ambiente 
require("./database/index")

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT , () => {
  console.log("Server is Runing")
})