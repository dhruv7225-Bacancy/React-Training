const apiResponse = [
  { id: 1, name: "A", tags: "x,y,z" },
  { id: 2, name: "B", tags: ["x", "y"] },
  { id: 3, name: "C" }
];
const ans=apiResponse.reduce((acc,obj)=>{
    let arr=[]
    if(!Array.isArray(obj.tags)){
        if(typeof obj.tags==="string"){
            arr=obj.tags.split(",")
        }
    }
    else{
        arr=obj.tags
    }
    acc[obj.id]={
        id: obj.id,
        name:obj.name,
        tags:arr
    }
    return acc
},{})

console.log(ans);
