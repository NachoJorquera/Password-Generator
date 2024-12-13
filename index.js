// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const leters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let characters = []
let passwordLength = 15
let inputBox = document.getElementById("pwdLength")
let numBtn = document.getElementById("num-btn")
let symBtn = document.getElementById("sym-btn")
let withNumbers = true
let withSymbols = true

function generatePassword() {
  let passwordOne = ""
  let passwordTwo = ""

  if (withNumbers === false && withSymbols === false) {
    characters = leters
  } else if (withNumbers && withSymbols === false) {
    characters = leters.concat(numbers)
  } else if (withNumbers === false && withSymbols) {
    characters = leters.concat(symbols)
  } else {
    characters = leters.concat(numbers, symbols)
  }

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

function numbersSelector() {
  if (numBtn.textContent === "Numbers ✅") {
    numBtn.textContent = "Numbers ❌"
    withNumbers = false
  } else {
    numBtn.textContent = "Numbers ✅"
    withNumbers = true
  }
  return withNumbers
}

function symbolsSelector() {
  if (symBtn.textContent === "Symbols ✅") {
    symBtn.textContent = "Symbols ❌"
    withSymbols = false
  } else {
    symBtn.textContent = "Symbols ✅"
    withSymbols = true
  }
  return withSymbols
}