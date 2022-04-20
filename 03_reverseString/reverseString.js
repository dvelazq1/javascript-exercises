const reverseString = function(myString) {
    const myArray = myString.split("");
    const reversed = myArray.reverse();
    const joined = reversed.join("");
    return joined;
};

// Do not edit below this line
module.exports = reverseString;
