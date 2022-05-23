function enviar(url,body) {
  const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  fetch(url,options)
  .then((response) => response.json())
  .then((data) => {
    if(!data.erro){
      window.location.href = "MatchGamerLogin.html"
    }
    else{
      window.location.href = "MatchGamererro.html"
    }
  })
}

function cadastrar() {
  event.preventDefault()
  let url = "http://localhost:3333/users"
  let email = document.getElementById("email").value
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  
  let body = {email,username,password}

  enviar(url,body)

}