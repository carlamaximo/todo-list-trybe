// Requirement 05
const inputText = document.getElementById('texto-tarefa');
const btnAddText = document.querySelector('#criar-tarefa');
const listText = document.getElementById('lista-tarefas');

function addText() {
    const inputValue = inputText.value;
    const listItem = document.createElement('li');
    listItem.innerText = inputValue;
    listItem.classList.add('item-lista-tarefas');
    listText.appendChild(listItem);
    inputText.value = '';
  }
btnAddText.addEventListener('click', addText);

// Requirements 07, 08
function changeColor(listText) {
  let arrayLi = document.getElementsByTagName('li');
  for(let i = 0; i < arrayLi.length; i += 1) {
    arrayLi[i].style.backgroundColor = 'white';
    // arrayLi[i].style.textDecoration = 'none'
    listText.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  //listText.target.style.textDecoration = 'line-through';
}
listText.addEventListener('click', changeColor);

// Requirement 09
function addLineThrough(event) {
  if (event.target.classList.contains('completed')) {
  event.target.classList.remove('completed');
  //listText.addEventListener('dblclick', addLineThrough);
  } else {
  event.target.classList.add('completed');
  }
}
listText.addEventListener('dblclick', addLineThrough);

// Requirement 10
const btnClear = document.getElementById('apaga-tudo');
function btnClearList(){
  listText.innerHTML = '';
}
btnClear.addEventListener('click', btnClearList);

// Requirement 11
const btnRemoveFinished = document.getElementById('remover-finalizados');
const itensCompleted = document.getElementsByClassName('completed')
function clearFinished() {
  while (itensCompleted.length > 0) {
    itensCompleted[0].parentNode.removeChild(itensCompleted[0]);
  }
}

btnRemoveFinished.addEventListener('click', clearFinished);