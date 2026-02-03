// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));

    //"Fail"
    //"Recovered"

// promise rejected and "Fail" as error message passed 
// in catch err is logged and "Recovered" is returned and in next then "Recovered" is logged