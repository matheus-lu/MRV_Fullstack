var firstNumber = Number(prompt("Digite o primeiro número")); // var firstNumber = 1;
var secondNumber = Number(prompt("Digite o segundo número")); // var secondNumber = 2;

function testSumNumbers(a, b) {
    var fullString = '';
    if (a != b) {
        fullString += `Os números ${a} e ${b} não são iguais. `;
    } else {
        fullString += `Os números ${a} e ${b} são iguais. `;
    };
    fullString += `Sua soma é ${a+b}, `;
    var sumBothNums = a + b
    if ((sumBothNums) < 10) {
        fullString += `que é menor que 10 e menor que 20.`; 
    } else if ((sumBothNums) < 20) {
        fullString += `que é maior que 10 e menor que 20.`; 
    } else {
        fullString += `que é maior que 10 e maior que 20.`; 
    }
    
    return fullString
};

var result = testSumNumbers(firstNumber, secondNumber)
alert(result)