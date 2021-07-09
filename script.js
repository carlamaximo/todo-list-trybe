// Requirement 05
const inputText = document.getElementById('texto-tarefa');
const btnAddText = document.getElementById('criar-tarefa');
const listText = document.getElementById('lista-tarefas');

btnAddText.addEventListener("click", addText);

function addText(event) {
  const textContent = inputText.value;
  const listItem = document.createElement('li');
  listItem.innerText = textContent;
  listItem.classList.add('item-lista-tarefas');
  listText.appendChild(listItem);
}