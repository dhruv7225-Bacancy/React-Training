const input=[
    {id:3,tags:["a","b"]},
    {id:1,tags:["b","c"]},
    {id:2,tags:["a","c","d"]},
    {id:2,tags:["d","e"]}
]

const ans=input.reduce((acc,obj)=>{
    obj.tags.forEach(tag => {
        if(acc[tag]){
            if(!acc[tag].find(x=>x==obj.id)){
                acc[tag].push(obj.id)
                acc[tag].sort()
            }
        }
        else{
            acc[tag]=[obj.id]
        }
    });
    return acc
},{})

console.log(ans);
