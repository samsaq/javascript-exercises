const sumAll = function(num1, num2) {
    //sum all numbers between num1 and num2 inclusive
    //return ERROR if num1 or num2 is negative or not a number, etc
    //we expect num1 and num2 to be integers

    //check if both numbers are integers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }

    //make sure num1 is smaller than num2, else swap
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    //check if both numbers are positive, return error if not
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    //sum all numbers between num1 and num2 inclusive
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
