const obj={
    name:"dhruv",
    addres:{
        home:"ranip",
        work:"abc"
    }
}

function deep(obj){
    if(obj==null || typeof obj !=="object"){
        return obj
    }
    let arr=(obj instanceof Array)?[]:{}
    for(let key in obj){
        arr[key]=deep(obj[key])
    }
    return arr
}
obj2=deep(obj)
obj2.name="asdkhbs"
console.log(obj);
console.log(obj2);
