function deep(obj){
    if(obj===null || typeof obj !== "object"){
        return obj
    }
    else {
        const list=Array.isArray(obj)?[]:{}
        for(let key in obj){
            list[key]=deep(obj[key])
        }
        return list
    }
}

const name5 ={
    name:"dhruv",
    add:{
        home:"ranip",
        work:"thaltej"
    }
}
const newobj=deep(name5)
console.log(newobj===name5);

// console.log(typeof(typeof name5));
