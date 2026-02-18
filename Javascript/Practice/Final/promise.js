promiseAllPolyfill([
    Promise.resolve(1),
    2,
    new Promise(res => setTimeout(() => res(3), 100))
]).then(console.log); // [1, 2, 3]


 async function promiseAllPolyfill(args){
    const ans=[]
    for(let i=0;i<args.length;i++){
        await Promise.resolve(args[i])
            .then((data)=>{
                ans[i]=data
                // if(i==args.length-1)return ans
            })
            .catch((err)=>{
                throw new err;
            })
    }
    return ans
}

function promiseAllPolyfill(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("Argument must be an array"));
      return;
    }

    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(err => {
          reject(err); // fail fast
        });
    });
  });
}


function promiseAllSettledPolyfill(args) {
    let completed = 0;
    const arr = []
    return new Promise((res,rej)=>{

        args.forEach((x, i) => {
            Promise.resolve(x)
                .then(data => {
                    arr[i] = { status: "fulfilled", data }
                    completed++;
                    if(completed==args.length){
                        res(arr)
                    }
                })
                .catch(err => {
                    arr[i] = { status: "rejected", err }
                    completed++;
                    if(completed==args.length){
                        res(arr)
                    }
                })
        });
    })
    
}

const api1 = () => new Promise((_, rej) =>
  setTimeout(() => rej("Primary API down"), 100)
);

const api2 = () => new Promise(res =>
  setTimeout(() => res("Data from backup API"), 300)
);

const api3 = () => new Promise(res =>
  setTimeout(() => res("Data from cache"), 50)
);

fetchWithFallback([api1, api2, api3])
  .then(console.log)
  .catch(console.error);


  function fetchWithFallback(args){
    let count=0;
    let ans=[]
    return new Promise((res,rej)=>{
        args.forEach((x,i)=>{
            Promise.resolve(x())
            .then(data=>{
                res(data)
            })
            .catch(err=>{
                count++;
                ans[i]=err
                if(count==args.length){
                    rej({
                        message: "All APIs failed",
                        errors:ans
                    })
                }
            })
        })
    })
  }

async function f() {
  const response = await fetch("https://example.com/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "dhruv"
    })
  });

  const data = await response.json();
  console.log(data);
}


// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Queen");
});

// Settle All
Promise.allSettled([myPromise1, myPromise2]).then((results) =>
  results.forEach((x) => console.log(x)),
);


console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");

    setTimeout(() => {
      console.log("4");
    }, 0);
  });

  queueMicrotask(() => {
    console.log("5");
  });

}, 0);

async function alpha() {
  console.log("6");

  await beta();

  console.log("7");

  Promise.resolve().then(() => {
    console.log("8");
  });
}

async function beta() {
  console.log("9");

  await Promise.resolve().then(() => {
    console.log("10");
  });

  console.log("11");
}

alpha();

Promise.resolve().then(() => {
  console.log("12");

  queueMicrotask(() => {
    console.log("13");
  });
});

queueMicrotask(() => {
  console.log("14");
});

setTimeout(() => {
  console.log("15");
}, 0);

console.log("16");

