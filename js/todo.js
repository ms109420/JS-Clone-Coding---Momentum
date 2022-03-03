const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); //자식에 span추가 li 안에 span 넣어줌
    span.innerText = newTodo;//span 안에는 빈칸입력값
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //입력값을 변수에 저장
    //아래에 값을 비운다해도 newTodo의 값이 사라지지는 않는다
    toDoInput.value = "";
    paintToDo(newTodo);

}

toDoForm.addEventListener("submit", handleToDoSubmit);