const Game = require("../Models/Game")

module.exports = {
  //Todos os Jogos presentes no Banco de Dados
  async readAll(req,res){
    const games = await Game.findAll()
    return res.status(200).json({games})
  },
  //Buscar um Jogo pelo ID
  async readOne(req,res){
    const id = req.params.id
    const game = await Game.findByPk(id)
    return game ? res.status(200).json(game) : res.status(400).json({
      erro:true,
      mensagem: "O jogo pesquisado não existe"
    })
  },
  //Buscar um jogo pelo titulo do jogo
  async readOneByName(req,res){
    const tittle = req.params.tittle
    const game = await Game.findOne({where:{tittle}})
    return game ? res.status(200).json(game) : res.status(400).json({
      erro:true,
      mensagem: "O jogo pesquisado não existe"
    })
  },
  //Cadastrar um jogo no Banco de Dados da comunidade
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
  //Dar Update dos dados de algum jogo
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