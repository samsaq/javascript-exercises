const removeFromArray = function(inputArray, ...args) {
    //use the spread operator to get the arguments into an array
    const removeValues = args;
    //loop through the array and remove the values via splice to prevent holes
    for (let item = 0; item < inputArray.length; item++) {
        if (removeValues.includes(inputArray[item])) {
            inputArray.splice(item, 1);
            item--; //decrement the item to account for the splice
        }
    }
    //return the array
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
