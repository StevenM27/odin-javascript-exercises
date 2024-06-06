const removeFromArray = function(array, ...remove) {
    answer = array;

    for (let i = 0; i < remove.length; i++) {
        answer = answer.filter( item => item !== remove[i]);
    }

    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
