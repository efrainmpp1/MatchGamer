# MatchGamer
Repositório destinado para o Projeto  Match Gamer da disciplina Projeto e Engenharia de Software.
Aqui estarão contidos as etapas de desenvolvimento do projeto explicando a jornada do grupo com a metodologia
SCRUM para construir o trabalho.

# Planejamento e Modelos 
Para nos planejarmos durante as Sprints, estamos utilizando da ferramenta Trello que nos permite gerenciar o caminhar da realização das atividades e ver as dificuldades a respeito [(Link do Trello)](https://trello.com/b/pSeF0hEv/projeto-engenharia-de-software).Para organizarmos a interface do frontend da nossa aplicação, utilizamos da ferramenta Figma, que contem os modelos das telas que serão programadas no front [(Link do Figma)](https://www.figma.com/file/oAfgqMiW6tff8PZg8vuzUb/Projeto-MatchGamer?node-id=0%3A1).

# Histórias de Usuário
- Enquanto jogador, eu gostaria de poder cadastrar uma conta e poder me logar nela
- Enquanto jogador, eu gostaria de listar os potenciais usuários públicos que poderiam, em um dado momento, jogar um jogo específico comigo
- Enquanto jogador, eu gostaria de ser capaz de cadastrar os jogos que tenho interesse em jogar online com outras pessoas
- Enquanto jogador, eu gostaria de criar um grupo privado de amigos
- Enquanto jogador, eu gostaria de listar os potenciais usuários amigos que poderiam, em um dado momento, jogar um jogo específico comigo
- Enquanto jogador, eu gostaria de ser capaz de remover os jogos que tenho interesse de jogar online com outras pessoas

# Sprint 1 (08/04 - 25/04) 

### Backlog (Atividades)
- Aderir e empregar ao Projeto o uso correto do SCRUM
- Detalhar as Histórias de Usuário, incluindo indagações ao PO
- Apresentação de primeiro protótipo contemplando pelo menos 2 Histórias de Usuário
- Relatar os problemas enfrentados e como foram mitigados
- Levantar os riscos observados para a Sprint 2
- Realizar Planning Poker para a Sprint 2

### Histórias de Usuário Escolhidas
Para essa primeira Sprint, as duas Histórias de Usuário escolhidas foram:
- Enquanto jogador, eu gostaria de poder cadastrar uma conta e poder me logar nela
- Enquanto jogador, eu gostaria de ser capaz de cadastrar os jogos que tenho interesse em jogar online com outras pessoas

### Código das funcionalidades

- Cadastrar 

```js
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
```
- Login
```js
async login(req,res){
    const {username,password} = req.body
    if(!username || !password){
      return res.status(400).json({
        erro: true,
        mensagem: "username ou senha não podem estar vazios"
      })
    }
    if(!UserServices.usernameExists(username)){
      return res.status(404).json({
        erro: true,
        mensagem: "username ou senha incorretos"
      })
    }
    const user = await User.findOne({where: {username: username}})
    if(await compare(password,user.password)){
      const token = jwt.sign({id_user:user.id} , SECRET_KEY , {expiresIn:300})
      return res.status(200).json({
        erro: false,
        mensagem: "Usuário Logado com sucesso",
        token
      })
    }
    else{
      return res.status(404).json({
        erro: true,
        mensagem: "username ou senha incorretos"
      })
    }
  }
```
- Cadastrando jogos que tem interesse
```js
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
```

### Problemas enfrentados pela equipe
- Encontrar uma ferramenta/tecnologia que os componentes do grupo se sentissem a vontade
de trabalhar
- Pelo framework React tinha muita coisa a ser aprendida, então optamos por utilizar só 
de html,css e javascript
- Organizar bem a divisão das USs em tasks que fossem de fato direcionadas

### Riscos para a Sprint 2
