const calculator = {
    add: function(a, b) {
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    div: function(a, b){
        return a / b;
    },
    powerof: function(a, b){
        return a ** b;
    },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 3);
const divResult = calculator.div(10, minusResult);
const powerof = calculator.powerof(divResult, minusResult);

