const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
  let sum = 0;
	for (let i = 0; i <= (numbers.length-1); i++){
    sum += numbers[i];
  }
  return sum;
};


const multiply = function(numbers) {
  let product = 1;
	for (let i = 0; i <= (numbers.length-1); i++){
    product *= numbers[i];
  }
  return product;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let num =1;
  if (a === 0) {
    return 1;
  }
  else if (a ===1) {
    return 1;
  }
  else {

  for(let i =a; i >= 1; i--){
    num *= i;
  }
  return num;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
