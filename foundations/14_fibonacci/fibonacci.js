const fibonacci = function (input) {
  const num = Number(input);
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  let numToBeAdded = 1;
  let arr = [1];
  for (let i = 0; i < num; i++) {
    arr.push(numToBeAdded);
    numToBeAdded = arr[i] + numToBeAdded;
  }
  return arr[num - 1];
};

let result = fibonacci(6);
console.log(result);

// Do not edit below this line
module.exports = fibonacci;
