//calculates the fibonacci number up to the x'th number and returns that value
const fibonacci = function (x) {
    if (x < 0) {
        return "OOPS";
    }
    else if (x <= 1) {
        return parseInt(x);
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
};

// Do not edit below this line
module.exports = fibonacci;
