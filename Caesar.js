// JavaScript source code
var codeString
var codeShift

function getData(){

    if(isNaN(document.getElementById("codeShift").value)){
        alert("The code shift must be an integer")
    }
    
    else{
        codeString = document.getElementById("codeString").value;
        codeShift = document.getElementById("codeShift").value;
    }

    console.log(codeString)
    console.log(codeShift)
}
