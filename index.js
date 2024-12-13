const leters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let characters = []
let passwordLength = 15
let inputBox = document.getElementById("pwd-length")
let numBtn = document.getElementById("num-btn")
let symBtn = document.getElementById("sym-btn")
let pwdOne = document.getElementById("pwd-one")
let pwdTwo = document.getElementById("pwd-two")
let modeBtn = document.getElementById("mode-btn")
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
    if (passwordLength < 4) {
      alert("Password must be at least 4 characters")
    } else if (passwordLength >= 26) {
      alert("Password must be 25 characters tops")
    } else {
      for (let i = 0; i < passwordLength; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomIndexOne]
        passwordTwo += characters[randomIndexTwo]
      }
    }
  }
  pwdOne.textContent = passwordOne
  pwdTwo.textContent = passwordTwo
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

function copyPasswordOne() {
  navigator.clipboard.writeText(pwdOne.textContent)
  alert("Password: " + pwdOne.textContent + " copyed to clipboard")
}

function copyPasswordTwo() {
  navigator.clipboard.writeText(pwdTwo.textContent)
  alert("Password: " + pwdTwo.textContent + " copyed to clipboard")
}

function modeSelector() {
  if (modeBtn.textContent === "Mode ☀️") {
    modeBtn.textContent = "Mode 🌙"
    document.getElementById("container").style.color = "#273549"
    document.getElementById("container").style.backgroundColor = "#ECFDF5"
    document.getElementById("divider").style.border = "1px solid #D5D4D8"
    document.getElementById("footer").style.color = "#6B7280"
  } else {
    modeBtn.textContent = "Mode ☀️"
    document.getElementById("container").style.color = "#FFFFFF"
    document.getElementById("container").style.backgroundColor = "#1F2937"
    document.getElementById("divider").style.border = "1px solid #273549"
    document.getElementById("footer").style.color = "#c2c2c2b0"
  }
  
}