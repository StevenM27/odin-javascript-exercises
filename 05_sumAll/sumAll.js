const sumAll = function(start, end) {
    answer = 0;

    if (typeof start !== 'number' || typeof end !== 'number' ||
        end < 0 || start < 0) {
        return 'ERROR';
    }

    if (end < start) {
        let temp = end;
        end = start;
        start = temp;
    }

    for (let i = start; i <= end; i++) {
        answer += i;
    }

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
