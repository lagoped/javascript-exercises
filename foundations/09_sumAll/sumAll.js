const sumAll = function(firstNumber, secondNumber) {
    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) || firstNumber < 0 || secondNumber < 0){
        return "ERROR";
    }

    const higherNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
    const lowerNumber = firstNumber > secondNumber ? secondNumber : firstNumber;

    let sum = 0

    for (let i = lowerNumber; i <= higherNumber; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
