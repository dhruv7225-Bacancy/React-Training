// Assignment 8: Typed Functions
// Write a function with required and optional parameters
// Define return types explicitly
// Create a small utility function that would exist in a real project
// Write a function with one required and one optional parameter
// Call it with and without the optional argument
// How does TypeScript enforce correctness here?
function getPrice(name:string):string{
    console.log(`product found : ${name}`);
    return (Math.random()*1000).toFixed(2);
}
function getProductDetails( name: string ,details?:string):string{
    let result="";
    if(Number(getPrice(name))>1000){
        result+=`${name} is high valued`
    }
    else{
        result+= `${name} is low valued`
    }
    result+=`\n`
    if(details){
        result+=`Details: ${details}`
    }
    console.log(result);
    
    return result
}

getProductDetails("A","some deatils")
getProductDetails("B")
