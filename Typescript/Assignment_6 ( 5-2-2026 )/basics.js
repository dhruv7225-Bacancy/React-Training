const prices = [2, 3, 4, 5, 5];
function calculateTotal(nums) {
    let sum = 0;
    nums.forEach(function (x) {
        sum = sum + x;
    });
    return sum;
}
function sum(a, b) {
    if (a + b > 100) {
        return "sum greater then 100";
    }
    return a + b;
}
console.log(calculateTotal(prices)); //
console.log(sum(3, 6));
console.log(sum(3, 100));
// console.log(sum(3,"100"));
