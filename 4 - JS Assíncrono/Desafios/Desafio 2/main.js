const $input = document.querySelector('#input')
const $lista = document.querySelector('#lista')


function search() {
  let user = $input.value

  if (!user) return 

  renderLoading();

  axios.get('https://api.github.com/users/'+ user +'/repos')
  .then(function(response) {
    renderRepositories(response.data)
  })  
  .catch(function(error) {
    renderError()
  })
}

function renderRepositories(repositories) {
  $lista.innerHTML = "";
  repositories.forEach(repositorie => {
    createElement(repositorie.name)
  })
  
}

function renderLoading() {
  $lista.innerHTML = ""
  createElement('Carregando...')
}

function renderError() {
  lista.innerHTML = "";
  createElement('Erro!')
}

function createElement(text) { 
  var textElement = document.createTextNode(text);
  var element = document.createElement('li');
  element.appendChild(textElement);
  $lista.appendChild(element);
  if (text === 'Erro!')
    element.style.color = 'red'
}