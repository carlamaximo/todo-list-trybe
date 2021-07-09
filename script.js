// Requirement 05
const inputText = document.getElementById('texto-tarefa');
const btnAddText = document.querySelector('#criar-tarefa');
const listText = document.getElementById('lista-tarefas');

btnAddText.addEventListener("click", addText)

function addText() {
    const inputValue = inputText.value;
    const listItem = document.createElement('li');
    listItem.innerText = inputValue;
    listItem.classList.add('item-lista-tarefas');
    listText.appendChild(listItem);
    inputText.value = "" ;
}
