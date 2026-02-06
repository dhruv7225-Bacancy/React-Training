const logs = [
  { user: "A", action: "login",  time: 1 },
  { user: "A", action: "click",  time: 3 },
  { user: "A", action: "click",  time: 4 },
  { user: "B", action: "login",  time: 2 },
  { user: "A", action: "logout", time: 8 },
  { user: "B", action: "click",  time: 5 },
  { user: "B", action: "logout", time: 7 },
  { user: "C", action: "login",  time: 4 },
  { user: "C", action: "logout", time: 23 }
];

const ans=logs.reduce((acc,obj)=>{
    if(obj.action=="login"){
        acc.push({
            user: obj.user,
            sessionTime: 0, 
            actionsCount: 0,
            start:obj.time
        })
    }
    else if(obj.action=="click"){
        acc.reduce((a,o)=>{
            if(o.user==obj.user){
                a.push(o);
                // o.actionsCount++;
            }
            return a;
        },[])[0].actionsCount++;
    }
    else if(obj.action=="logout"){
        let ob=acc.reduce((a,o)=>{
            if(o.user==obj.user){
                a.push(o)
            }
            return a
        },[])[0]
        ob.sessionTime=obj.time-ob.start;
    }
    return acc
},[])
const temparr=[]
const sorted = ans.reduce((sortedArr, obj) => {
  let inserted = false;

  const result = sortedArr.reduce((res, curr) => {
    if (!inserted && obj.sessionTime > curr.sessionTime) {
      res.push(obj);
      inserted = true;
    }
    res.push(curr);
    return res;
  }, []);

  if (!inserted) result.push(obj);

  return result;
}, []);
console.log(sorted.map((obj)=>{
    // acc["user"]=obj.user
    // acc["user"]=obj.user
    
    return {
        user: obj.user,
        sessionTime: obj.sessionTime,
        actionsCount: obj.actionsCount
    }
}));
