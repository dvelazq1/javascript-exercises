// using rest parameters in ES6
const removeFromArray = function(myArray, elementToRemove) {
    for (var i = 0; i < myArray.length; i++){
        if (myArray[i] === elementToRemove){
        myArray.splice(i, 1);
    }
}
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
