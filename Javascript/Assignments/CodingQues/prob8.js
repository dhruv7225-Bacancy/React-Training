const user={ name: "A", age: 30 }
const ans={}
for(let key in user){
    ans[key.toUpperCase()]=user[key]
}
console.log(ans);
