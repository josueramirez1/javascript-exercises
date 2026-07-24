const reverseString = function (string) {
  const arr = string.split("");
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
