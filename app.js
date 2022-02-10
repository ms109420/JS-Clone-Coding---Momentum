//prompt를 사용할때 모든 값이 string으로 나오기 때문에 형변환을 시켜줘야함

const age = parseInt(prompt("How old are you"));

//console.log(typeof "15", typeof parseInt("15"));

///console.log(isNaN(age)); // 숫자는 false 글자는 true  false인 이유(숫자가 아닌것 에서 부정)

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <=50) {
    console.log("you can drink");
} else if(age > 50 && age <=80) {
    console.log("You should exercise");
} else if(age > 8){
    console.log("You can do whatever you want.");
}




 