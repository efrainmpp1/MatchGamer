function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const h1 = document.getElementById('name');

function getName(id){
  const url = "http://localhost:3333/users/" + id
  fetch(url)
  .then((response) => response.json())
  .then(async (user) => {
    console.log(user)
    let texto = await createNode('h1')
    texto.innerHTML = 'Teste'
    return 
    
  })
}