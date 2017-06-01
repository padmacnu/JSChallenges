// Approach #1: Repeat a String with a for Loop
// Testcase: repeatStringNumTimes("*", 3) should return "***".
function repeatStringNumTimes(str, times) {
  if (times < 1) {
    return;
  }
  let repeatedString = "";
  for (let i = 1; i <= times; i++) {
    repeatedString += str;
  }
}

repeatStringNumTimes("Srinivas", 3);


// Approach #2: Repeat a String with a While Loop

function repeatStringNumTimes(string, times) {
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

repeatStringNumTimes("Srinivas", 3);
