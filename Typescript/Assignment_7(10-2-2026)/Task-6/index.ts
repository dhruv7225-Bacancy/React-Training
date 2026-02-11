// Assignment 6: Interfaces
// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function

interface User1 {
  id: string;
  name: string;
  email: string;
}

interface Admin1 extends User1{
  role: "admin"
}
interface Customer1 extends User1{
  role: "customer"
}

function doSomeTask(user: User1){
  console.log(user.id);
  console.log(user.name);
  console.log(user.email);
}

const admin: Admin1 = {
  id: "1",
  name: "Alice",
  email: "alice@company.com",
  role: "admin",
};

const customer1: Customer1 = {
  id: "2",
  name: "Bob",
  email: "bob@gmail.com",
  role: "customer",
};

doSomeTask(admin);
doSomeTask(customer1);

// Design an interface for an API response object
// Create a function that accepts this interface as a parameter
// Extend the interface and reuse it

interface ApiResponse<T>{
  success:boolean,
  data: T,
  message?: string
}

function handleResponce<T>(response: ApiResponse<T>){
  if(response.success){
    console.log(response.data);
  }
  else {
    console.log("Error:", response.message);
  }
}

interface PaginatedResponse<T> extends ApiResponse<T> {
  total: number;
  page: number;
}
const paginatedUsers: PaginatedResponse<Customer1[]> = {
  success: true,
  data: [customer1],
  total: 50,
  page: 1,
};
handleResponce(paginatedUsers);
// Create an interface for a Product
// Create a variable that follows this interface
// Why are interfaces preferred in large projects?

interface Product{
  name:string,
  price: number
}

const product: Product={
  name: "abc",
  price: 220
}

// Interfaces describe structure clearly and cleanly.
//Extendable
//Declaration Merging 