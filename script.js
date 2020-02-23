var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz"
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var numbers = "1234567890"

var passwordLength = parseInt(prompt("How many characters? It must be between 8 and 128 characters."))
var choices = {
  uppercase: false,
  lowercase: false,
  specialCharacters: false,
  numbers: false
}

choices.uppercase = confirm("Do you want to include uppercase?")
choices.lowercase = confirm("Do you want to include lowercase?")
choices.specialCharacters = confirm("Do you want to include special characters?")
choices.numbers = confirm("Do you want to include numbers?")

var bowl = ""
function generatePassword() {
  var password = ""
  if(choices.uppercase) {
    bowl+=letters.toUpperCase()
  }
  if(choices.lowercase) {
    bowl+=letters.toLowerCase()
  }
  if(choices.specialCharacters) {
    bowl+=specialCharacters
  }
  if(choices.numbers) {
    bowl+=numbers
  }

  for(var i = 0; i < passwordLength; i++) {
    password+=bowl.charAt(Math.floor(Math.random() * bowl.length))   
  }
 return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
