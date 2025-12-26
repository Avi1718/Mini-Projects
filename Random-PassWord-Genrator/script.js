const passwordBox =document.getElementById("password");
const length = 16

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword(){
    let charSet = upperCase + lowerCase + numbers + symbols;
    let password = "";
    for(let i=0; i<length; i++){
        let randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    alert("Password Copied!");
}