// Assignment 4
// Create a constant adminUser .
// Create a type from it using typeof .
// Add a new property and observe how the type changes automatically.

const adminUser={
    id:122,
    name:"admin1",
    isActive:true,
}

type AdminUser=typeof adminUser



// const adminUser={
//     id:122,
//     name:"admin1",
//     isActive:true,
//     permissions: ["read", "write", "delete"]
// }

// type AdminUser=typeof adminUser

//type will have permissions also

