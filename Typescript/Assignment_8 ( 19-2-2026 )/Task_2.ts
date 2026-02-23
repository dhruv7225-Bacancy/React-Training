// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.\

type User={
    id:number,
    name: string,
    email:string,
    isActive:boolean
}

function activateUser(user:(Partial<User>&Pick<User, "isActive">)){
    console.log(user)
}
function getUser(user:(Pick<User, "id"|"email">)){
    console.log(user)
}


activateUser({id:1,isActive:true})
activateUser({id:1,email:"a@gmail.com"})//error
getUser({id:1,email:"a@gmail.com"})
getUser({id:1,email:"a@gmail.com",isActive:true})//error
