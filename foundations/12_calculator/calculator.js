const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = function (num1, exp) {
  return num1 ** exp;
};

const factorial = function (num1) {
  let result = 1;
  for (let i = num1; i > 0; i--) {
    console.log(i);
    result *= i;
  }
  return result;
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
