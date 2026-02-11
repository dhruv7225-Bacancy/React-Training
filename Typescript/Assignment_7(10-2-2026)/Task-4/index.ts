// Assignment 4: Intersection Types
// Create an Order using intersection ( & )
// Create the same model using interfaces and extends
// Remove one required property and observe the compiler error
// Decide which approach feels clearer and why
// Create two small object types and combine them using intersection ( & )
// Create the same structure using interfaces and extends
// Try removing a required property and observe the compiler error
// Identify when intersection is better than union

type OrderDetails = {
  orderId: string;
  amount: number;
};

type CustomerInfo = {
  customerName: string;
  email: string;
};

type Order = OrderDetails & CustomerInfo;

const orderDetails: Order={
    orderId: "123",
    customerName:"DHRUV",
    amount:12345,
    //email missing so i will give compile err
    email:"a@gmail.com"
    //now err gone
}


interface OrderDetailsI{
    orderId:string,
    amount :  number
}

interface CustomerInfoI{
    name:string,
    email: string
}

interface OrderByInterface extends OrderDetailsI , CustomerInfoI{

}

const newOrderDetails:OrderByInterface={
    orderId: "123",
    name:"DHRUV",
    amount:12345,
    //email missing so i will give compile err
    email:"a@gmail.com"
    //now err gone
}

// Interface is More readable for OOP-style modeling
// Intersection is better when composing small reusable types.