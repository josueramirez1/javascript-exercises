const convertToCelsius = function (farenheit) {
  let celsius = ((farenheit - 32) * 5) / 9;
  let convertedCelsius = Math.round(celsius * 10) / 10;
  return convertedCelsius;
};

const convertToFahrenheit = function (celsius) {
  let farenheit = (celsius * 9) / 5 + 32;
  let convertedFarenheit = Math.round(farenheit * 10) / 10;
  return convertedFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
