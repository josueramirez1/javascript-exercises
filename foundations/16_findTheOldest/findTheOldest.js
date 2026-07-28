const findTheOldest = function (arr) {
  let oldest = 0;
  arr.forEach((person) => {
    let personAge = person.yearOfDeath - person.yearOfBirth;

    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }

    if (person.yearOfDeath - person.yearOfBirth > oldest) {
      oldest = person.yearOfDeath - person.yearOfBirth;
    }
  });

  return arr.find(
    (person) => person.yearOfDeath - person.yearOfBirth === oldest,
  );
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
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

let result = findTheOldest(people);
console.log(result);
// Do not edit below this line
module.exports = findTheOldest;
