const findTheOldest = function (arr) {
  // variables
  let death = "yearOfDeath";
  let oldest;

  // Finds the oldest person if yearOfDeath is undefined on non-oldest or oldest

  for (let obj of arr) {
    if (death in obj === false) {
      oldest = arr.sort((first, next) => {
        return next.yearOfBirth > first.yearOfBirth ? -1 : 1;
      });
    }
  }
  oldest = arr.sort((first, next) => {
    let firstPersonAlive = first.yearOfDeath - first.yearOfBirth;
    let nextPersonAlive = next.yearOfDeath - next.yearOfBirth;
    return firstPersonAlive > nextPersonAlive ? -1 : 1;
  });

  // return oldest person

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
