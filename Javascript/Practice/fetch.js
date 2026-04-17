function fet(params){
    return fetch(params).then(data=>{
        return data.json()
    })
    .then(data=>{
        return data.filter((x)=>{return x.completed === true})
    })
    
}

const data =await fet('https://jsonplaceholder.typicode.com/todos')
console.log(data);

