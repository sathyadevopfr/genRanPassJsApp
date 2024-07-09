const passwordBox = document.getElementById('password')
const length = 10;

const upperCase = "ABCDEFGHILJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghiklmnopqrstuvwxyz"
const number = "0123456789"
const symbols = "!@#$%^&*()_-+=}{[]<>?\/"
const allchar = upperCase + lowerCase + number + symbols
let  createPassword= ()=> {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length) ]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length) ]
    password += number[Math.floor(Math.random() * number.length) ]
    password += symbols[Math.floor(Math.random() * symbols.length) ]

    while (length > password.length) {
       password+= allchar[Math.floor(Math.random() *allchar.length)] 
    }
    passwordBox.value = password;
}
 let copyPassword = () =>{
        passwordBox.select();
        document.execCommand('copy')  }
