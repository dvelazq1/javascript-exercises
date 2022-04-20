const sumAll = function (num1, num2) {
    if (!(typeof num1=== 'number') || !(typeof num2 === 'number')){
        return "ERROR";
    }
    if (Math.sign(num1) != 1 || Math.sign(num1) != 1 ){
        return "ERROR"; 
    }
    if (num1> num2){
        const temp = num2;
        num2 = num1;
        num1 = temp;
    }
    sum = 0;
    for (i = num1; i <= num2; i++) {
        sum = sum + i;
    }
return sum;

};

// Do not edit below this line
module.exports = sumAll;
