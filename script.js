// Requirement 05
const inputText = document.getElementById('texto-tarefa');
const btnAddText = document.querySelector('#criar-tarefa');
const listText = document.getElementById('lista-tarefas');

btnAddText.addEventListener("click", addText)

function addText() {
  const listItem = document.createElement('li');
  listItem.classList.add('item-lista-tarefas');
  listItem.innerText = inputText.value;
  listText.appendChild(listItem);
}
addText()
