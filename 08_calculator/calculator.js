const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sumOfArray = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sumOfArray;
};

const multiply = function (arr) {
  let multiplicationOfArray = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
  return multiplicationOfArray;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let one = 1;
  let originalNum = num;
  if (num === 0) return one;
  for (let i = num; i > 1; i--) {
    originalNum *= i - 1;
  }

  return originalNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
