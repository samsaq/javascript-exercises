const leapYears = function(inputYear) {
    //a leap year must be divisible by 4
    //a leap year must not be divisible by 100 unless it is also divisible by 400
    if (inputYear % 4 === 0) {
        if (inputYear % 100 === 0) {
            if (inputYear % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
