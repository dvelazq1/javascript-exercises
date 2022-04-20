const repeatString = function(myString, num) {
    newString = "";
    for (i = 0; i < num; i++){
        newString = newString + myString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
