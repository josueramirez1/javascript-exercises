const sumAll = function (num1, num2) {
  let result = 0;
  let first = num1;
  let second = num2;

  if (num1 > num2) {
    first = num2;
    second = num1;
  }

  if (first < 0 || second < 0) {
    return "ERROR";
  }

  if (typeof first !== "number" || typeof second !== "number") {
    return "ERROR";
  }

  if (!Number.isInteger(first) || !Number.isInteger(second)) {
    return "ERROR";
  }

  for (let i = first; i <= second; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
