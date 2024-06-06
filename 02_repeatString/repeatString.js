const repeatString = function(string, num) {
  answer = '';

  if (num < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < num; i++) {
    answer += string;
  }

  return answer;
};

// Do not edit below this line
module.exports = repeatString;
