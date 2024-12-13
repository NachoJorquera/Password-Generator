const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let passwordLength = 15
let inputBox = document.getElementById("pwdLength")

function generatePassword() {
  let passwordOne = ""
  let passwordTwo = ""
  if (inputBox.value === "") {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndexOne = Math.floor(Math.random() * characters.length)
      let randomIndexTwo = Math.floor(Math.random() * characters.length)
      passwordOne += characters[randomIndexOne]
      passwordTwo += characters[randomIndexTwo]
    }
  } else {
    passwordLength = Number(inputBox.value)
    for (let i = 0; i < passwordLength; i++) {
      let randomIndexOne = Math.floor(Math.random() * characters.length)
      let randomIndexTwo = Math.floor(Math.random() * characters.length)
      passwordOne += characters[randomIndexOne]
      passwordTwo += characters[randomIndexTwo]
    }
  }
  document.getElementById("pwdOne").textContent = passwordOne
  document.getElementById("pwdTwo").textContent = passwordTwo
}