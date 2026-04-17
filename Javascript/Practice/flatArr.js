function flat(arr){
    if(!Array.isArray(arr))return arr
    const ans=[]
    arr.forEach(x => {
        if(!Array.isArray(x)){
            ans.push(x)
        }
        else{     
            ans.push(...flat(x))
        }
    });
    return ans
}

console.log(flat([1,2,[3,4,[5,6]]]));

const {name, email}=obj

// // Custom recursive array flattener


// function flattenArray(arr) {
//   return arr.reduce(
//     (acc, val) =>
//       Array.isArray(val) ? [...acc,...flattenArray(val)] : acc.concat(val),
//     [],
//   );
// }

// const nestedArray = [1, [2, [3, [4, [5]]]]];
// const flatArray = flattenArray(nestedArray);

// console.log(flatArray); // Output: [1, 2, 3, 4, 5]
