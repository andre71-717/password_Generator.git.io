let PwEl = document.getElementById("pwHere");  
let copyEl = document.getElementById("copy");  
let lenEl = document.getElementById("myRange"); 
let passLength = document.querySelector("#passLength1>span") 
let upperEl = document.getElementById("upper");  
let lowerEl = document.getElementById("lower");  
let symbolEl = document.getElementById("symbol");  
let generateEl = document.getElementById("generate");  
let numberEl = document.getElementById("number");  
let upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";  
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";  
let numbers = "0123456789";  
let symbol = "~!@#$%^&*()_+=|";  

function getLowercase() {  
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];  
   }  
   function getUppercase() {  
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];  
   }  
   function getNumber() {  
    return numbers[Math.floor(Math.random() * numbers.length)];  
   }  
   function getSymbol() {  
    return symbol[Math.floor(Math.random() * symbol.length)];  
   }  
  
  
   function generateX() {  
    const xs = [];  
    if (!upperEl.checked) {  
     xs.push(getUppercase());  
    }  
    if (!lowerEl.checked) {  
     xs.push(getLowercase());  
    }  
    if (!numberEl.checked) {  
     xs.push(getNumber());  
    }  
    if (!symbolEl.checked) {  
     xs.push(getSymbol());  
    }  
    if (xs.length === 0) return "";  
    return xs[Math.floor(Math.random() * xs.length)];  
   }  

   function generatePassword() {  
   passLength.innerHTML = lenEl.value
   lenEl.oninput = () =>{
    passLength.innerHTML = lenEl.value
  
   }


    
    let password = "";  
    for (let i = 0; i < lenEl.value; i++) {  
     const x = generateX();  
     password += x;  
    }  
    PwEl.value = password;  
   } 

   generateEl.addEventListener('click', generatePassword);
   copyEl.addEventListener('click', ()=>{
       const textarea = document.createElement("textarea");
       const password = PwEl.value;
       if(!password){
           return;
       }
       textarea.value = password;
       document.body.appendChild(textarea);
       textarea.select();
       document.execCommand('copy');
       textarea.remove();
       alert("password copied to clipboard")
   });

