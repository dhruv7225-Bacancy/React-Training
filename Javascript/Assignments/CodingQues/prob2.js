const activities = [
  { userId: 1, type: "login", duration: 5 },
  { userId: 2, type: "browse", duration: 20 },
  { userId: 1, type: "browse", duration: 15 },
  { userId: 3, type: "login", duration: 3 },
  { userId: 2, type: "logout", duration: 2 },
  { userId: 1, type: "logout", duration: 1 },
  { userId: 1, type: "login", duration: 4 } // repeated action for same user
];


const ans=activities.reduce((acc,obj)=>{
    switch(obj.type){
        case "login":
            if(acc[obj.userId]){
                acc[obj.userId].totaltime+=obj.duration
                acc[obj.userId].login=acc[obj.userId].login?acc[obj.userId].login+1:1
            }
            else{
                acc[obj.userId]={
                    totaltime:obj.duration,
                    login:1
                }
            }
            break;
        case "browse":
            if(acc[obj.userId]){
                acc[obj.userId].totaltime+=obj.duration
                acc[obj.userId].browse=acc[obj.userId].browse?acc[obj.userId].browse+1:1
            }
            else{
                acc[obj.userId]={
                    totaltime:obj.duration,
                    browse:1
                }
            }
            break;
        case "logout":
            if(acc[obj.userId]){
                acc[obj.userId].totaltime+=obj.duration
                acc[obj.userId].logout=acc[obj.userId].logout?acc[obj.userId].logout+1:1
            }
            else{
                acc[obj.userId] = {
                    totaltime:obj.duration,
                    logout:1
                }
            }
            break;
    }
    return acc
},{})

console.log(ans);
