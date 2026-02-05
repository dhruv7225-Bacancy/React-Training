const name1={
    firstname: "dhruv",
    lastname: "patel",
    printName(hometown,age){
        console.log(`${this.firstname}  ${this.lastname}  ${hometown} ${age}`);
    }
}
const name2={
    firstname: "abc",
    lastname: "patel",
}

name1.printName.call(name2,"ahmedabad",23)
//this will do this in printName refer to name2 and all other argument passed will be argument to function

name1.printName.apply(name2,["ahmedabad",23])
// apply will do same but argument of function are passed in arrylist

let printMyName=name1.printName.bind(name2,"ahmedabad",23)
printMyName()
// bind will make a copy of printName function and will bind to name2 object and will return function not directly call it

printMyName.call(name1,"xya",10) 
//once copy of printName is boind to name2 then its this will not be changed by call bind apply etc
// so this will be pointing to name2 itself