const convertToCelsius = function(x) {
let cels = (x -32)*(5/9);

if (cels % 1 === 0){
  console.log(parseInt(cels));
  return cels;  
  }
  else{
  console.log(parseFloat(cels.toFixed(1)));
  return parseFloat(cels.toFixed(1));
  }
};

const convertToFahrenheit = function(x) {

const fah = x *(9/5) + 32;
if (fah % 1 === 0){
  console.log(parseInt(fah));
  return parseInt(fah);
}
  else{
  console.log(parseFloat(fah.toFixed(1)));
  return parseFloat(fah.toFixed(1));
  }
};

convertToCelsius(32); // Return 0 -- Pass
convertToCelsius(100); // Return 37.8 -- 
convertToCelsius(-100); // Return - 73.3 --
convertToFahrenheit(0); // Return 32 -- Pass
convertToFahrenheit(73.2) // Return 163.8 -- 
convertToFahrenheit(-10); // Return 14 -- Pass


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
