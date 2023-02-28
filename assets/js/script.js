// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function promptPasswordOptions() {
  let length = parseInt(prompt("Enter the desired password length (8-64 characters):"));
  // check if the password length is a readable integer
  if (isNaN(length)) {
  alert("Please enter a numerical value.");
  return;
  } else if (length < 8) {
    // warns the user if the password length is less than 8 characters
  alert("Password length must be at least 8 characters.");
  return;
  } else if (length > 64) {
    // warns the user if the password length is greater than 64 characters
  alert("Password length must not exceed 64 characters.");
  return;
  }

  // this is the prompt for the user to confirm they want to include special characters
  let hasSpecial = confirm("Include special characters?");
  // this is the prompt for the user to confirm they want to include numeric characters
  let hasNumeric = confirm("Include numeric characters?");
  // this is the prompt for the user to confirm they want to include lowercase characters
  let hasLower = confirm("Include lowercase characters?");
  // this is the prompt for the user to confirm they want to include uppercase characters
  let hasUpper = confirm("Include uppercase characters?");

  // Conditional statement to check if user does not include any types of characters.
  if (!hasSpecial && !hasNumeric && !hasLower && !hasUpper) {
  alert("At least one character type must be selected.");
  return;
  }

  // sorting user input here
  let passwordOptions = {
  length: length,
  hasSpecial: hasSpecial,
  hasNumeric: hasNumeric,
  hasLower: hasLower,
  hasUpper: hasUpper
  };

  return passwordOptions;
  }

  // get a random element from an array
  function randomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
  }

  // Function to generate password with user input
  function generatePassword() {
  let options = promptPasswordOptions();

  // store the password here
  let result = [];
  // store the types of characters to include in the password here
  let characterTypes = [];
  // array to store one of each type of chosen character
  let possibleChars = [];

  // add array of special characters into array of possible characters
  if (options.hasSpecial) {
  possibleChars = possibleChars.concat(specialCharacters);
  characterTypes.push(randomElement(specialCharacters));
  }

  // add array of numeric characters into array of possible characters
  if (options.hasNumeric) {
  possibleChars = possibleChars.concat(numericCharacters);
  characterTypes.push(randomElement(numericCharacters));
  }

  // add array of lowercase characters into array of possible characters
  if (options.hasLower) {
  possibleChars = possibleChars.concat(lowerCasedCharacters);
  characterTypes.push(randomElement(lowerCasedCharacters));
  }

  // add array of uppercase characters into array of possible characters
  if (options.hasUpper) {
  possibleChars = possibleChars.concat(upperCasedCharacters);
  characterTypes.push(randomElement(upperCasedCharacters));
  }

  // loop over the password length and add one random character from the possibleChars
  for (let i = 0; i < options.length; i++) {
  let possibleChar = randomElement(possibleChars);
  result.push(possibleChar);
  }
  
  // add at least one of each guaranteed character to the password
  for (let i = 0; i < characterTypes.length; i++) {
  result[i] = characterTypes[i];
  }
  
  // return the generated password
  return result.join("");
  }
  
  // Get references to the #generate element
  let generateBtn = document.querySelector("#generate");
  
  // Write password to the password input
  function displayPassword() {
  let password = generatePassword();
  document.querySelector("#password").value = password;
  }
  
  // event listener to generate button
  generateBtn.addEventListener("click", displayPassword);

