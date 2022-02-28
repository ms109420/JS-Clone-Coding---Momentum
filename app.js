const loginForm   = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저가 새로고침 되는것을 막아줌
    loginForm.classList.add("hidden"); //입력하면 입력창을 없애줌
    const username = loginInput.value; //입력한 유저 이름을 변수에 저장
    greeting.innerText = `Hello  ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}  

loginForm.addEventListener("submit", onLoginSubmit);

