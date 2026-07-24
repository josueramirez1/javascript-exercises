const convertToCelsius = function (num) {
  //(0°C × 9/5) + 32
  let celsiusNum = Number((num - 32) / (9 / 5));
  if (!Number.isInteger(celsiusNum)) {
    return Number(celsiusNum.toFixed(1));
  }
  return celsiusNum;
};

const convertToFahrenheit = function (num) {
  //(32°F − 32) × 5/9
  let fahrenheitNum = Number(num * 1.8 + 32);

  if (!Number.isInteger(fahrenheitNum)) {
    return Number(fahrenheitNum.toFixed(1));
  }
  return fahrenheitNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
