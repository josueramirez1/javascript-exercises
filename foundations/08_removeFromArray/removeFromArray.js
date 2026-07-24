const removeFromArray = function (arr, ...args) {
  return arr.filter((item) => {
    return !args.includes(item);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
