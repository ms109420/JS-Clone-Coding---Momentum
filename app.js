const title = document.querySelectorAll(".hello h1");

console.log(title);

/*
- querySelector : element를 CSS selector방식 검색(ex. h1:first-child)***가장 많이 쓰임
- getElementById: 하나의 값 반환
- getElementsByClassName() : 많은 element를 가져올때 씀(배열)
- getElementsByTagName() : name을 할당 가능(배열)

const title = document.querySelectorAll("#hello");
const title = document.getElementById("hello");
둘의 코드는 같다 querySelectorAll는 CSS selector 자체를 전달
#이 붙는 이유는 id를 가져온다고 명시해줘야 하기 떄문이다

*/