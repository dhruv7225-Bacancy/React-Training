// Assignment 4
// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .

abstract class Service<T>{
    abstract execute(id:number):T
}

type User1={
    id:number,
    name:string,
    email:string
}
class UserService extends Service<User1>{
    execute(id:number){
        return {
            id:id,
            name:"dhruv",
            email:"a@gmail.com"
        }
    }
}

const user12:User1=new UserService().execute(2)
console.log(user12)

// output
// {
//   "id": 2,
//   "name": "dhruv",
//   "email": "a@gmail.com"
// } 