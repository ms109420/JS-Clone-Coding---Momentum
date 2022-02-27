const loginIput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginIput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick );