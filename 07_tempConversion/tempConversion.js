const ftoc = function(fahrenheitTemp) {
  var cTemp = ((fahrenheitTemp-32)*(5/9));
  return Math.round(cTemp*10)/10;
};

const ctof = function(celsiusTemp) {
  fTemp = celsiusTemp*(9/5) + 32;
  return Math.round(fTemp*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
