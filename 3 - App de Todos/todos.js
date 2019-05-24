const $list = document.querySelector('#app ul')
const $input = document.querySelector('#app input')
const $btn = document.querySelector('#app button')

let todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {
  $list.innerHTML = ''
  for (todo of todos) {
    const $todo = document.createElement('li')
    const todoText = document.createTextNode(todo)
    let pos = todos.indexOf(todo)

    const $link = document.createElement('a')
    $link.setAttribute('href', '#')
    $link.setAttribute('onclick', 'deleteTodo('+ pos + ')')
    
    const linkText = document.createTextNode('Excluir') 

    $link.appendChild(linkText)

    $todo.appendChild(todoText)
    $list.appendChild($todo)
    $list.appendChild($link)

  }
}

renderTodos()

function addTodo() {
  const todoText = $input.value

  todos.push(todoText)
  $input.value = ''
  renderTodos()
  saveToStorage()
}

$btn.onclick = addTodo

function deleteTodo(pos) {
  todos.splice(pos,1)
  saveToStorage()
  renderTodos()
}

function saveToStorage() {

  localStorage.setItem('list_todos', JSON.stringify(todos))
}