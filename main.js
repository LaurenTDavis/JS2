var userInput = prompt("Enter a word")
var inputLength = userInput.length;
var thirdChar = userInput.charAt(2);

alert("You entered: " + userInput + "\n" + "Length: " + inputLength + "\n" + "Third Character: " + thirdChar + "\n" + "Lowercase: " + userInput.toLowerCase() + "\n" + "Uppercase: " + userInput.toUpperCase() + "\n" + "Example: " + userInput + " is a word." + "\n" + "Subword: " + userInput.substring(1, 4));
