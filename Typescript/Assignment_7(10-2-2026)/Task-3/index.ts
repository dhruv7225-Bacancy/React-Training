// Assignment 3: Union Types
// Create a union type for two different user roles using type
// Create another union using two interfaces
// Write a function that accepts the union and narrows the type safely
// Add one more role (e.g. Guest ) to the User union
// Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access

type Admin={
    role:"admin",
    name: string,
    permissions : string[]
}

type Member = {
  role: "member";
  name: string;
  subscriptionLevel: string;
};

type Guest = {
  role: "guest";
  name: string;
  expiresAt: Date;
};

type User = Admin | Member | Guest;

function checkUser(user :User){
    // user.permissions //will give compile err can't direclty access it, have to use type guard
    if(user.role==="admin"){
        user.permissions.forEach(permission =>{
            console.log(permission);
        }) 
    }
    else if( user.role==="guest"){
        console.log(user.expiresAt);
    }
    else if(user.role==="member"){
        console.log(user.subscriptionLevel);
    }
    
}

const adminUser:User={
    role:"admin",
    name:"dhruv",
    permissions:["r","w"]
}

checkUser (adminUser)

const memberUser:User={
    role:"member",
    name:"xyz",
    subscriptionLevel:"500"
}

checkUser (memberUser)

const guestUser:User={
    role:"guest",
    name:"abc",
    expiresAt:new Date(2027,1,1)
}

checkUser (guestUser)