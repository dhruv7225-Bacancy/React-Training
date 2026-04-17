const logs = [
    { userId: 1, action: "login", time: 100 },
    { userId: 1, action: "click", time: 120 },
    { userId: 1, action: "logout", time: 150 },

    { userId: 2, action: "login", time: 200 },
    { userId: 2, action: "click", time: 250 },
    { userId: 2, action: "logout", time: 300 },

    { userId: 1, action: "login", time: 400 },
    { userId: 1, action: "click", time: 450 },
    { userId: 1, action: "logout", time: 500 },

    { userId: 3, action: "login", time: 600 } // incomplete session
];

const ans=logs.reduce((acc, obj) => {
    if (obj.action == "login") {
        acc[obj.userId] = {
            totalSessionTime: obj.time,
            totalClicks: 0,
            averageSessionTime: 0
        }
    }
    else if(obj.action=="click"){
        // acc[obj.userId].totalSessionTime+=obj.time
        acc[obj.userId].totalClicks+=1
        // acc[obj.userId].averageSessionTime=acc[obj.userId].totalSessionTime/acc[obj.userId].totalClicks
    }
    else{
        acc[obj.userId].totalSessionTime=obj.time-acc[obj.userId].totalSessionTime
        acc[obj.userId].averageSessionTime=acc[obj.userId].totalSessionTime/acc[obj.userId].totalClicks
    }
    return acc
}, {})

console.log(ans);
