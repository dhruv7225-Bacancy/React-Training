
// 🔥 Next — Implementation Question 27
// Implement memoize(fn)

// Requirements:

// Cache results based on arguments

// Same arguments → return cached result

// Different arguments → compute again

// Preserve this

// No JSON stringify for keys

// Example:

// const slowAdd = (a, b) => {
//   console.log("calculating");
//   return a + b;
// };

// const fastAdd = memoize(slowAdd);

// fastAdd(2, 3); // "calculating", 5
// fastAdd(2, 3); // 5 (cached)
// fastAdd(3, 2); // "calculating", 5

function memoize(func) {
    const ls = []
    return function (...args) {
        // args.sort();
        let key = args.join("-")
        const ans = ls.find((arr) => {
            if (arr[0] == key) {
                return arr
            }
        })
        if (ans != null) {
            console.log(ans[1],);
        }
        else {
            let a = func(args)
            ls.push([key, a])
            console.log(a);

        }
    }
}


const slowAdd = (args) => {
    console.log("calculating");
    // console.log(args);

    let sum = args.reduce((acc, a) => {
        acc = acc + a
        return acc
    }, 0)
    return sum;
};

const fastAdd = memoize(slowAdd);

fastAdd(2, 3); // "calculating", 5
fastAdd(2, 3); // 5 (cached)
fastAdd(3, 2); // "calculating", 5


