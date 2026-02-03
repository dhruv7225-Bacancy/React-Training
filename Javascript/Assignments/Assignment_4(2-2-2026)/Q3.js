
// Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

    // Error Occurred
// it reject the promise and send error "Error Occurred" and it is catched in catch block and err is logged