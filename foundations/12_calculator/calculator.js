const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0,)
};

const multiply = function (numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue, 1,)
};

const power = function (base, exponent) {
  // return Math.pow(base, exponent)
  return base**exponent
};

const factorial = function (a) {
  if(a <= 1) {
    return 1;
  }

  let sum = 1;

  while (a > 1) {
    sum = sum * a;
    a--;
  }

  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
