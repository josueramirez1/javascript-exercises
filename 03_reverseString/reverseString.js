const reverseString = function (string) {
  let reversedString = [];
  for (let i = 0; i < string.length; i++) {
    let slicedLetter = string.slice(i, i + 1);
    reversedString.unshift(slicedLetter);
  }
  return reversedString.join("");
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
