const reverseString = function(string) {
  answer = '';
  array = string.split('');

  for (let i = 0; i < array.length; i++) {
    answer += array[array.length - i - 1];
  }

  return answer;
};

// Do not edit below this line
module.exports = reverseString;
