// Assignment 1: Number Check
// Write a program to check whether a number is:
// Positive
// Negative
// Zero

function checkSign(num){
    if(num>0){
        console.log(`${num} is positive`); 
    }
    else if(num<0){
        console.log(`${num} is negative`);
    }
    else{
        console.log(`${num} is zero`);
        
    }
}

checkSign(3)
checkSign(-3)
checkSign(0)

// Assignment 2: Even/Odd in Range
// Print numbers from 1 to 20 and show whether each is Even or Odd.
// Expected format:
// 1 -> Odd
// 2 -> Even
// 3 -> Odd
// ...

for(let a=1;a<=20;a++){
    a%2!=0?console.log(`${a} -> odd`):console.log(`${a} -> even`);
}

// Assignment 3: Role Access using switch-case
// Create a variable role with values like:
// "ADMIN"
// "USER"
// "MANAGER"
// Print:
// ADMIN → Full access
// USER → Limited access
// MANAGER → Moderate access
// default → Invalid role

function checkAuthority(role){
    switch(role){
        case "ADMIN" :
            console.log("ADMIN → Full access");
            break;
        case "USER" :
            console.log("USER → Limited access");
            break;
        case "MANAGER" :
            console.log("MANAGER → Moderate access");
            break;
            
        default:
            console.log("Invalid role");
    }
}
const obj={
    "ADMIN":"ADMIN → Full access",
    "USER":"USER → Limited access",
    "MANAGER":"MANAGER → Moderate access",
}
function func(str){
    console.log(obj[str] ?? "Invalid role");
    // if(obj[str]){
    // }
    // else{
    //     console.log();
    // }
}
func("ADMIN")
// checkAuthority("ADMIN")
// checkAuthority("USER")
// checkAuthority("MANAGER")
// checkAuthority("random")

// Assignment 4: Total Price Function
// Create a function:
// calculateTotalPrice(price, quantity)
// Return total.
// Example:
// console.log(calculateTotalPrice(150, 4)); // 600

const calculateTotalPrice= (price, quantity)=>{
    if(price<0){
        return "price can't be negative";
    }
    if(quantity<0){
        return "quantity can't be negative";
    }
    return price * quantity;
}

console.log(calculateTotalPrice(150,4))
console.log(calculateTotalPrice(150,-1))
console.log(calculateTotalPrice(-50,4))
console.log(calculateTotalPrice(150,5))

// Assignment 5: Coupon Discount Function
// Create a function:
// applyCoupon(amount, couponCode)
// Rules:
// "SAVE10" → 10% discount
// "SAVE20" → 20% discount
// "NONE" → no discount
// Example:
// console.log(applyCoupon(1000, "SAVE10")); // 900
// console.log(applyCoupon(2000, "SAVE20")); // 1600
// console.log(applyCoupon(500, "NONE"));    // 500

function applyCoupon(amount, couponCode){
    switch(couponCode){
        case "SAVE10":
            return amount*0.9;
            // break;
        case "SAVE20":
            return amount*0.8;
            // break;
        case "NONE":
            return amount;
        default :
            return "Invalid Coupon Code";
            
    }
}

console.log(applyCoupon(1000, "SAVE10")); 
console.log(applyCoupon(500, "Great")); 
console.log(applyCoupon(2000, "SAVE20"));
console.log(applyCoupon(500, "NONE")); 
