const Game = require("../Models/Game")

module.exports = {
  async readAll(req,res){
    const games = await Game.findAll()
    return res.status(200).json({games})
  },
  async readOne(req,res){
    const id = req.params.id
    const game = await Game.findByPk(id)
    return game ? res.status(200).json(game) : res.status(400).json({
      erro:true,
      mensagem: "O jogo pesquisado não existe"
    })
  },
  async cadastrar(req,res){
    const {tittle , genero , sobre , plataformas} = req.body
    const newGame = await Game.create({
      tittle : tittle,
      genero : genero,
      sobre : sobre,
      plataformas: plataformas
    })
    .then(()=> {
      return res.status(201).json({
        erro:  false,
        mensagem:"Jogo Cadastrado com  Sucesso"
      })
    }).catch(()=>{
      res.status(400).json({
        erro: true,
        mensagem: "Erro ao cadastrar Jogo"
      })
    })
  },
  async update(req,res){
    const id =  req.params.id
    const data = req.body
    await Game.update(data,{where: {id}})
    .then(()=> {
      return res.status(201).json({
        erro: false,
        mensagem: "Jogo atualizado com sucesso"
      })
    }).catch(()=>{
      return res.status(400).json({
        erro: true,
        mensagem: "Não foi possivel atualizar o Jogo"
      })
    })
  }
  
}