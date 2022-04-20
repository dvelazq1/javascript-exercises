const repeatString = function(myString, num) {
    if (num === 0){
        return "";
    }
    else if (!(typeof num === 'number' && Math.sign(num)===1)){
        return "ERROR";
    }
    newString = "";
    for (i = 0; i < num; i++){
        newString = newString + myString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
