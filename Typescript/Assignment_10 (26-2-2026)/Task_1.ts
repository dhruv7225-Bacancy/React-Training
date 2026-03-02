// Assignment
// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.
// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.

type PaymentState = {
    status: "completed",
    time: Date,
    transactionId: number

} | {
    status: "failed",
    time: Date,
    error: string
} | {
    status: "refunded",
    refundId: number
}


function handlePayment(paymentState: PaymentState) {
    switch (paymentState.status) {
        case "completed":
            console.log("transaction completed :", paymentState.transactionId);
            break;
        case "failed":
            console.log("transaction failed :", paymentState.error)
            break;
        case "refunded":
            console.log("Refunded:", paymentState.refundId);
            break;
        default:
            const _exhaustiveCheck: never = paymentState;
            return _exhaustiveCheck;
    }
}

type ApiResponse<T> = { status: "success"; data: T } | { status: "error"; error: string };

type Product = {
    id: string;
    name: string;
    price: number;
};

const response: ApiResponse<Product[]> = {
    status: "success",
    data: [
        { id: "1", name: "Laptop", price: 50000 },
    ],
};

function isSuccess<T>(response: ApiResponse<T>): response is { status: "success"; data: T } {
    return response.status==="success";
}

if (isSuccess(response)) {
  console.log(response.data); 
} 
