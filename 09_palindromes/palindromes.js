const palindromes = function (inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    //convert both strings to lowercase and remove all non-alphanumeric characters
    inputString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
    reversedString = reversedString.toLowerCase().replace(/[^a-z0-9]/g, "");
    return inputString === reversedString;
};

palindromes("racecar!");

// Do not edit below this line
module.exports = palindromes;
