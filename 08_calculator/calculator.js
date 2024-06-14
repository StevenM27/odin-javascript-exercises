const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, number) => product * number, 1);
};

const power = function(a, e) {
  return a ** e;
};

const factorial = function(number) {
	total = 1;

  while (number > 1) {
    total *= number;
    number--;
  }

  return total;
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
