// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInteger(15) === 51
//   reverseInteger(981) === 189
//   reverseInteger(500) === 5
//   reverseInteger(-15) === -51
//   reverseInteger(-90) === -9

function reverseInteger(number){
  const reversedInteger = number.toString().split('').reverse().join('');
  return parseInt(reversedInteger) * Math.sign(number)
  
  
}


console.log(reverseInteger(7));
console.log(reverseInteger(14));
console.log(reverseInteger(1978));
console.log(reverseInteger(-510));
console.log(reverseInteger(-9));
console.log(reverseInteger(2000));
