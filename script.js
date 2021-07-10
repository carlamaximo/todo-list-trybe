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
// Requirements 07, 08 and 09
function changeColor(listText) {
  let arrayLi = document.getElementsByTagName('li');
  for(let i = 0; i < arrayLi.length; i += 1) {
    arrayLi[i].style.backgroundColor = "white";
    //arrayLi[i].style.textDecoration = 'none'
  }
  listText.target.style.backgroundColor = 'rgb(128, 128, 128)';
  listText.target.classList.add('completed');
  listText.target.style.textDecoration = 'line-through';
}
listText.addEventListener("click", changeColor);

function removeLineThrough(listText) {
  listText.target.classList.remove('completed');
  listText.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
}

listText.addEventListener("dblclick", removeLineThrough);

// Requirement 10
const btnClear = document.getElementById('apaga-tudo');

function btnClearList(){
  listText.innerHTML = "";
}

btnClear.addEventListener('click', btnClearList);