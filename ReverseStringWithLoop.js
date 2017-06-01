

function reverseString(str) {
  let newString = "";
  debugger;

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // // or newString = newString + str[i];
  }

  return newString;
}

reverseString("Srinivas");
