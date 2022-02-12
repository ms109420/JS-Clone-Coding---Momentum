/*
js는 HTML과 연결 되어있다
HTML에서 정보를 가져올 수 있고
JS에서 그 항목들을 볼 수 있다
*/

const title = document.getElementById("title"); 
//HTML에서 id를 통해 title를 가져윰

title.innerText = "Got you!"

console.log(title.id);
console.log(title.className);