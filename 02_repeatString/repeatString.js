const repeatString = function(string, num) {
    let output = "";
    //if num is negative, return error
    if(num < 0)
    return "ERROR";

    //loop through num and add string to output until the num of repeated strings is reached
    for(let i = 0; i < num; i++)
    {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
