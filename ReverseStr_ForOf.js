// Directions
// Given a string, return a new string with the reversed order of characters

// Test case
// reverse('HTML') === 'LMTH'
// reverse('Srinivas') === 'savinirs'

function reverse(str) {
  let newStr = ''
  for (let character of str) {
    newStr = character + newStr;
  }
  return newStr;
}

console.log(reverse('HTML'));
console.log(reverse('Javascript'));
console.log(reverse('Ashmitha'));
