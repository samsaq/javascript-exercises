const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(inputArray) {
	let curSum = 0;
  for(const element of inputArray)
  {
    curSum += element;
  }
  return curSum;
};

const multiply = function(inputArray) {
  let curVal = 1;
  for(const element of inputArray)
  {
    curVal *= element;
  }
  return curVal;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if(a === 1 || a === 0)
  {
    return 1;
  }
  else
  {
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
