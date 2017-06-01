// Reversing a string
// Test case
// reverseString(“hello”) should become “olleh”

reverseString("Srinivas");

function reverseString(str) {
debugger;
	var splitString = str.split(""); 
   // splitString = (8) ["s", "a", "v", "i", "n", "i", "r", "S"]
	
  var reverseArray = splitString.reverse();
   // reverseArray = (8) ["s", "a", "v", "i", "n", "i", "r", "S"]
	
  var joinArray = reverseArray.join("");
   // joinArray = "savinirS"

	return joinArray;
}
