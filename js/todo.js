const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));//클릭한 todo가 아닌 다른 todo는 남겨줌 
    //변수의 type이 달라서 parseInt로 변경해줌
    //즉, li로 지워주고 지우고 남은 todolist를 새로 만들어준다 그리고 saveToDos로 toDos의 정보를 storage애 덮어씌워줌
    saveToDos();

}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;//span 안에는 빈칸입력값e 
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo );
    li.appendChild(span); //자식에 span추가 li 안에 span 넣어줌
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //입력값을 변수에 저장
    //아래에 값을 비운다해도 newTodo의 값이 사라지지는 않는다
    toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }
  
  toDoForm.addEventListener("submit", handleToDoSubmit);
  
  const savedToDos = localStorage.getItem(TODOS_KEY);
  
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }