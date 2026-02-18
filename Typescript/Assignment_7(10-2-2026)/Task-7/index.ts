// Assignment 7: Enums
// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?

enum PaymentStatus{
    initiated ="INITIATED", 
    success ="SUCCESS", 
    failed= "FAILED"
}

function checkStatus(state: PaymentStatus){
    console.log(state);
}
checkStatus(PaymentStatus.initiated)
checkStatus(PaymentStatus.success)
checkStatus(PaymentStatus.failed)
// checkStatus(PaymentStatus.error);//GIVES COMPILE ERR

// Enums restrict values to predefined options.
// enum gives Same type safety and can easily be configurable