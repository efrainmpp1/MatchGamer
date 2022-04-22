const { update } = require("../Models/User")
const User = require("../Models/User")
const {v4} = require("uuid")
const {hash, compare} = require("bcrypt")

module.exports = {
  async readAll(req,res){
    const users = await User.findAll()
    return res.json({users})
  },
  async cadastrar(req,res){
    const {email, username, password} = req.body
    //Gerando um uuid  e uma senha com encriptada
    const id = v4(); 
    const hashPassword = await hash(password,8);
    const newUser = await User.create({
      id,
      email,
      username,
      password: hashPassword
    })
    .then(()=> {
      return res.status(201).json({
        erro:  false,
        mensagem:"Usuário Cadastrado com  Sucesso"
      })
    }).catch(()=>{
      res.status(400).json({
        erro: true,
        mensagem: "Erro ao cadastrar Usuário"
      })
    })
  },
  async readOne(req,res){
    const id_user =  req.params.id
    const user = await User.findByPk(id_user)
    //Retorna um statuscode para caso o user nao exista
    return user ? res.status(200).json(user) : res.status(404).json({
      erro: true,
      mensagem: "Não foi possivel encontrar esse usuario"
    })
  },
  async update(req,res){
    const id_user =  req.params.id
    const {password,...data} = req.body
    await User.update(data,{where: {id: id_user}})
    .then(()=> {
      return res.status(201).json({
        erro: false,
        mensagem: "Usuário atualizado com sucesso"
      })
    }).catch(()=>{
      return res.status(400).json({
        erro: true,
        mensagem: "Não foi possivel atualizar o usuario"
      })
    })
  },
  async delete(req,res){
    const id_user =  req.params.id
    await User.destroy({where:{id: id_user}})
    .then(()=> {
      return res.status(200).json({
        erro: false,
        mensagem: "Usuário deletado com sucesso"
      })
    }).catch(()=>{
      return res.status(201).json({
        erro: true,
        mensagem: "Não foi possivel deletar o Usuário"
      })
    })
  }
}
