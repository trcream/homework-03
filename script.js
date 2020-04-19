
var generateBtn = document.querySelector("#generate");
var wrapper = document.querySelector('.wrapper');
var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');

// Javascript styling

wrapper.style.background = 'black';
h1.style.color = 'red';
h2.style.textAlign = 'center';


// Write password to the #password input

function writePassword() {
  var password = generatePassword(options);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Generate password with button

generateBtn.addEventListener("click", function() {
  writePassword();

});


var passwordLength = 0;
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*'];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Make sure password length meets requirements

function isPasswordLengthCorrect(passwordLength){

  return passwordLength >= 8 && passwordLength<= 128
 
}

//Loop until a correct password is chosen

while ( ! isPasswordLengthCorrect( passwordLength)) {
  passwordLength =  parseInt(prompt("Choose a password length between 8 and 128"));

}

console.log(passwordLength);


//Options object

var options = {
  "passwordLength": passwordLength,
  'lowercase':  confirm('Do you want lowercase letters in your password?'),
  'uppercase' : confirm('Do you want uppercase letters in your password?'),
  'numeric' : confirm('Do you want numbers in your password?'),
  'special' : confirm('Do you want special characters in your password?'),
}

console.log(options)

//Generate password

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

   // Run function

generatePassword(options)
