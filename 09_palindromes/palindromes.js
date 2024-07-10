const palindromes = function (string) {
  const regex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  let punctuationless = string.replace(regex, "");
  let noWhiteSpace = punctuationless.replace(/\s+/g, "");
  let finalString = noWhiteSpace.toLowerCase();

  let reversed = finalString.split("").reverse().join("");

  if (finalString === reversed) return true;
  return false;
};

palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
