var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz"
var specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var numbers = "1234567890"

var passwordLength = parseInt(prompt("How many characters?"))
var choices = {
  uppercase: false,
  lowercase: false,
  specialCharacter: false,
  number: false
}
choices.uppercase = confirm("Do you want to include uppercase?")
choices.lowercase = confirm("Do you want to include lowercase?")
choices.specialCharacter = confirm("Do you want to include special characters?")
choices.number = confirm("Do you want to include numbers?")

var bowl = ""
function generatePassword() {
  var password = ""
  if(choices.uppercase) {
    bowl+=letters.toUpperCase()
  }
  if(choices.lowercase) {
    bowl+=letters.toLowerCase()
  }
  // if(choices.specialCharacter) {
  // bowl+=letters.toSp()
  }
  if(choices.number) {
    bowl+=letters.toNumber()
  }
  for(var i = 0; i < passwordLength; i++) {
    password += bowl.charAt(Math.floor(Math.random() * bowl.length))   
  }
 return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
