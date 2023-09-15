var numbers="1234567890"
var symbols="!@#$%^&*()"
var lowercase="qwertyuiopasdfghjklzxcvbnm"
var uppercase=lowercase.toUpperCase()
var options=""
var password=""

function generatePassword(){
var passwordLength=prompt("How long would you like your password?")
console.log(passwordLength)
if (passwordLength<8 || passwordLength>128){
  alert("Cannot be less than 8 characters or over 128 characters!")
  return null
}
var getNumbers=confirm("Would you like numbers in your password?")
if (getNumbers===true) {
  options += numbers
}
var getSymbols=confirm("Would you like symbols in your password?")
if (getSymbols===true) {
  options += symbols
}
var getLowercase=confirm("Would you like lowercase letters in your password?")
if (getLowercase===true) {
  options += lowercase
} 
var getUppercase=confirm("Would you like uppercase letters in your password?")
if (getUppercase===true) {
  options += uppercase
}
if (!getNumbers && !getSymbols && !getLowercase && !getUppercase){
  alert("you must choose at least one option")
  return null
}
for(var i=0;i<passwordLength;i++){
  var randomizeOptions=Math.floor(Math.random()*options.length)
  password+=options.charAt(randomizeOptions)
}
console.log(getNumbers,getSymbols,getLowercase,getUppercase,options)
return password
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
