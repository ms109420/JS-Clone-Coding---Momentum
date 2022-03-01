const loginForm   = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저가 새로고침 되는것을 막아줌
    loginForm.classList.add("hidden"); //입력하면 입력창을 없애줌
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);//로컬에 저장
    paintGreetings(username);
}  


function paintGreetings(username){
    greeting.innerText = `Hello  ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //입력값이 없으면 form을 보이게 함
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //입력값 기다림

} else {
    paintGreetings(savedUsername);
    
}