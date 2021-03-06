const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS= 'toDos';

function paintToDo(text){
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

function loadTodos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    } 
}

function init();{
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}


init();