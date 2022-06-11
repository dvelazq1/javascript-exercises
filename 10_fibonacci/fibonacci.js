const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }
    if (typeof(num) == 'string'){
        parseInt(num);
    }
    myArr = [1, 1];
    sum = 0;
    for(let i = 2; i <= num; i++){
        sum = myArr[i-2] + myArr[i-1];
        myArr.push(sum);
    }
    return myArr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
