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
      window.location.href = "MatchGamerDashboard.html"
    }
    else{
      window.location.href = "MatchGamererro.html"
    }
  })
  //.then((resp) => window.location.href = "MatchGamerDashboard.html")
}

function login() {
  event.preventDefault()
  let url = "http://localhost:3333/login"
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  
  let body = {username,password}

  enviar(url,body)

}