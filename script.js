// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword(options);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}



generateBtn.addEventListener("click", function() {
  writePassword();

});


// Steps to make randon # generator

// series of prompts

// prompt the user for the lenght of the password they want to generate

var passwordLength = 0;
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*'];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function isPasswordLengthCorrect(passwordLength){

  return passwordLength >= 8 && passwordLength<= 128
 
}


while ( ! isPasswordLengthCorrect( passwordLength)) {
  passwordLength =  parseInt(prompt("Choose a password length between 8 and 128"));

}

console.log(passwordLength);

/* var lowercase = confirm('Do you want lowercase letters in your password?');
var uppercase = confirm('Do you want uppercase letters in your password?');
var numeric = confirm('Do you want numbers in your password?');
var special = confirm('Do you want special characters in your password?');
 */
// reprompt them to input the correct value if they didn't give a valid one

var options = {
  "passwordLength": passwordLength,
  'lowercase':  confirm('Do you want lowercase letters in your password?'),
  'uppercase' : confirm('Do you want uppercase letters in your password?'),
  'numeric' : confirm('Do you want numbers in your password?'),
  'special' : confirm('Do you want special characters in your password?'),
}

console.log(options)
// prompt user for a seris of configuration options, lowercase, uppercasem numeric, and/or special characters
//validate configuration

function generatePassword(options) {

  var password = ' ';
  var possibleCharacters = [];
  var requiredCharacters = [];
  
if(options.lowercase){

  possibleCharacters = possibleCharacters.concat(lowercase);
  requiredCharacters.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
}

if(options.uppercase){

  possibleCharacters = possibleCharacters.concat(uppercase);
  requiredCharacters.push(uppercase[Math.floor(Math.random() * uppercase.length)]);

}
if(options.numeric){
    
  possibleCharacters = possibleCharacters.concat(numeric);
  requiredCharacters.push(numeric[Math.floor(Math.random() * numeric.length)]);

}

if(options.special){

  possibleCharacters = possibleCharacters.concat(special);
  requiredCharacters.push(special[Math.floor(Math.random() * special.length)]);

}


for ( var i = 0; i < options.passwordLength; i++ ){

 if (requiredCharacters[i]){

  password += requiredCharacters[i];

 }

 else {

  password += possibleCharacters[ Math.floor(Math.random() * possibleCharacters.length)];
 }


 

  }

console.log(password);

return password;

   }

generatePassword(options)
