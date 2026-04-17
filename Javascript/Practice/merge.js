function deepMerge(obj1, obj2) {
    if(typeof obj1!=="object" || typeof obj2!=="object"){
        return null    
    }
    let ans={}
    for(let key in obj1){
        if(obj2[key]){
            ans[key]=deepMerge(obj1[key],obj2[key])
        }
        else{
            ans[key]=obj1[key]
            
        }
    }
    for(let key in obj2){
        if(!ans[key]){
            ans[key]=obj2[key]
        }
    }
    return ans;
}

const obj1 = { a: {d:{b : 5}}, b: { x: 10, y: 20 },d:5 };
const obj2 = { a:{d :{c:5}}, b: { y: 30, z: 40 }, c: 3 };

const mergedObj = deepMerge(obj1, obj2);

console.log(mergedObj); // Output: { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }
