const loginForm   = document.querySelector("#login-form");
const loginIput = document.querySelector("#login-form input");


const link = document.querySelector("a");

function onLoginSubmit(tomato) {
    tomato.preventDefault(); //브라우저가 새로고침 되는것을 막아줌
    console.log(tomato);
}  

//tomato(event)는 submit의 정보 및 기능을 담는 object이다
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);

}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
