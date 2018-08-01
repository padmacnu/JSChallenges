/*
  Given a string, return a new string with the reversed order of characters
  
  Test Case
  reverse('america') === 'acirema'
  reverse('africa')  === 'acirfa'
*/


// using reduce() method
const reverse = (str) => {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
}
console.log(reverse('apple'));


// using for..of statement
function reverse1(str) {
  let reversed = ''
  for(let character of str) {
    reversed = character + reversed
  }
  return reversed
}
console.log(reverse1('america'));


// using reverse() method
function reverse2(str) {
  return str.split('').reverse().join('')
}
console.log(reverse2('africa'));


// using for loop
function reverse3(str) {
  let reversed = ''
  for(let i = str.length - 1; i>=0; i--) {
    reversed = reversed + str[i]
  }
  return reversed
}
console.log(reverse3('canada'))


//Recursion with substring and charAt
function reverse4(str) {
  return (str === '') ? '' : reverse4(str.substr(1)) + str.charAt(0);
}
console.log(reverse4('russia'))
