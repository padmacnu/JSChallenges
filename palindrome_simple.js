// Directions

// Given a string, return true if the string is a palindrome 
// or false if it is not. Palindromes are strings that form the same word if its reversed. 
// *Do* include spaces and punctuations in determining if the string is a palindrome.

// Examples
// palindrome(“kayak”) === true
// palindrome(“racecar”) === true
// palindrome(“abcd”) === false

function palindrome(str) {
 	var reversed = str.split('').reverse().join('')
	return str === reversed
}

console.log(palindrome('racecar'))
console.log(palindrome('madam'))
console.log(palindrome('adam'))
