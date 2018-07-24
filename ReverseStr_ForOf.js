// Directions
// Given a string, return a new string with the reversed order of characters

// Test case
// reverse('HTML') === 'LMTH'
// reverse('Srinivas') === 'savinirs'

function reverse(str) {
  let reversed = ''
  
  for (let character of str) {
    reversed = character + reversed;
  }
  
  return reversed;
}

console.log(reverse('HTML'));
console.log(reverse('Javascript'));
console.log(reverse('Ashmitha'));
