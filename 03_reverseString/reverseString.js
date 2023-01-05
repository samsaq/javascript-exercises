const reverseString = function(string) {
    //reverse a string given as an argument & return the reversed string
    //split the string into an array of characters
    const stringArray = string.split('');
    //reverse the array
    const reversedArray = stringArray.reverse();
    //join the array into a string
    const reversedString = reversedArray.join('');
    //return the string
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
