const removeFromArray = function (array, ...others) {
  //   let newArr = [...array, ...others];
  let newArr = array.filter((item) => {
    if (!others.includes(item)) {
      return item;
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
