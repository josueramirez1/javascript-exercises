const sumAll = function (num1, num2) {
  //conditions for running properly
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";

  // creating array for later reducing
  let arr = [];
  //if larger number is passed through first...
  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      arr.push(i);
    }
  } else
    for (let i = num1; i <= num2; i++) {
      arr.push(i);
    }

  //using reduce method
  let initialValue = 0;

  let sumOfAllNum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, initialValue);
  return sumOfAllNum;
};

sumAll(5, 7);

// Do not edit below this line
module.exports = sumAll;
