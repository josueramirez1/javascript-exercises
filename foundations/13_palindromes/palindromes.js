const palindromes = function (string) {
  const alphabet = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
  const alphabetArr = alphabet.split("");
  let updatedString = "";
  let palindrome = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < alphabetArr.length; j++) {
      if (string[i] === alphabetArr[j]) {
        updatedString += string[i];
        palindrome = string[i] + palindrome;
      }
    }
  }

  return updatedString.toLowerCase() === palindrome.toLowerCase();
};

console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;
