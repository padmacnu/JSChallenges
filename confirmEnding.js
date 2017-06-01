function confirmEnding(string, target) {
  if (string.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Srinivas", "v");


// Approach #2: Using a ternary operator as a shortcut for the if statement:
function confirmEnding(string, target) {
 return (string.substr(-target.length) === target) ? true : false;
}
confirmEnding("Srinivas", "s");


/*
  Approach #3: Confirm the Ending of a String With Built-In Functions — with endsWith()
  The endsWith() method determines whether a string ends with the characters of 
  another string, returning true or false as appropriate. 
  This method is case-sensitive.
*/
function confirmEnding(string, target) {
  // We return the method with the target as a parameter
  // The result will be a boolean (true/false)
  return string.endsWith(target); // 'Bastian'.endsWith('n')
}
confirmEnding('Bastian', 'n');
