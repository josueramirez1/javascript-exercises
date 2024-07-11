const findTheOldest = function (arr) {
  // variables
  let death = "yearOfDeath";
  let oldest;

  // Finds the oldest person if yearOfDeath is undefined on non-oldest or oldest and places it first on the array of objects

  for (let obj of arr) {
    if (death in obj === false) {
      arr.sort((first, next) => {
        return next.yearOfBirth > first.yearOfBirth ? -1 : 1;
      });
    }
  }

  oldest = arr.sort((first, next) => {
    let firstPersonAlive = first.yearOfDeath - first.yearOfBirth;
    console.log(firstPersonAlive);
    let nextPersonAlive = next.yearOfDeath - next.yearOfBirth;
    console.log(nextPersonAlive);
    return firstPersonAlive > nextPersonAlive ? -1 : 1;
  });

  // return oldest person

  return oldest[0];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
