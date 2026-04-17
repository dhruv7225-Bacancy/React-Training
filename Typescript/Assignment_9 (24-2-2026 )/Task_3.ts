// Assignment 3
// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string

function getStringValue(value:number):string
function getStringValue(date:Date):string

function getStringValue(value:number |Date):string{
    if(typeof value=="number"){
        return `The number is ${value}`
    }
    else{
        return value.toUTCString();
    }
}

console.log(getStringValue(5))
console.log(getStringValue(new Date()))

// "The number is 5",  
// "Tue, 24 Feb 2026 18:00:48 GMT" 