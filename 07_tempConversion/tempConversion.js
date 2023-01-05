const convertToCelsius = function(fahrenheitInput) {
  //convert fahrenheit to celsius
  let celsius = (fahrenheitInput - 32) * 5/9;
  //round to 1 decimal
  return Math.round(celsius * 10) / 10; //could also use toFixed(1) and then convert to number
};

const convertToFahrenheit = function(celsiusInput) {
  //convert celsius to fahrenheit
  let fahrenheit = (celsiusInput * 9/5) + 32;
  //round to 1 decimal
  return Math.round(fahrenheit * 10) / 10; //could also use toFixed(1) and then convert to number
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
