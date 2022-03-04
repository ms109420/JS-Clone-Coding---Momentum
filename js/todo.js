const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;//span 안에는 빈칸입력값e 
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo );
    li.appendChild(span); //자식에 span추가 li 안에 span 넣어줌
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //입력값을 변수에 저장
    //아래에 값을 비운다해도 newTodo의 값이 사라지지는 않는다
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("THis is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of", item));
}