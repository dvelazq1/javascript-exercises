// using rest parameters in ES6
const removeFromArray = function(... args) {
    // the first parameter is the array 
    const newArray = args[0];
    // the following parameters are the arguments that should 
    // be excluded from the array hence the not operator
    return newArray.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
