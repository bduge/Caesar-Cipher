// JavaScript source code
var codeString
var codeShift
var cipherString
var newLetter
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function main(){
    getData();
    generateCipher();
    printCipher();
}

function getData(){

    if(isNaN(document.getElementById("codeShift").value)){
        alert("The code shift must be an integer")
    }

    else if(document.getElementById("codeString").value == "" 
    || document.getElementById("codeShift").value == ""){
        alert("Either your code name or code shift text field is empty")
    }
    
    else{
        codeString = document.getElementById("codeString").value;
        codeShift = document.getElementById("codeShift").value;
        codeShift = parseInt(codeShift);
        cipherString = document.getElementById("codeString").value;
    }

    console.log(codeString)
    console.log(codeShift)
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function getNewLetter(previous, shift){
    if(shift<-26){
        shift = shift % -26
    }
    if(shift>= -26 && shift<0){
        shift = 26 + shift;
    }
    newPosition = (previous + shift) % 26
    newLetter = alphabet[newPosition]
}

function generateCipher(){
    for(i=0; i<codeString.length; i++){
        for(j=0; j<alphabet.length; j++){
            if(codeString.charAt(i)==alphabet[j]){
                getNewLetter(j, codeShift)
                cipherString=setCharAt(cipherString, i, newLetter)
            }
        }
    }
}

function printCipher(){
    document.getElementById("display").innerHTML = cipherString
}