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
// Requirements 07 and 08
function changeColor(listText) {
  let arrayLi = document.getElementsByTagName('li');
  for(let i = 0; i < arrayLi.length; i += 1) {
    arrayLi[i].style.backgroundColor = "white";
  }
  listText.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
listText.addEventListener("click", changeColor);
