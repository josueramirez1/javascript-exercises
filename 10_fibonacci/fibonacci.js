const fibonacci = function (n) {
  // Change string to number
  let num = parseInt(n);

  // restrictions
  if (num === 0) return 0;
  if (num < 0) return "OOPS";

  // variables for fibonacci
  let arr = [];
  let sum = 0;
  // start the loop
  for (let i = 0; i < num; i++) {
    // if array is empty...
    if (!arr[0]) {
      arr.push(i + 1);
      arr.push(i + 1);
    }
    // if array has two values...
    sum = arr[i] + arr[i + 1];
    arr.push(sum);
  }
  return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
