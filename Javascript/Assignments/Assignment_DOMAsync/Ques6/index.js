// 6) Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
// Call them in sequence using nested callbacks.
// Log "All steps finished" only after step3 completes.


function step1(func){
    setTimeout(()=>{
        console.log("step1 completed");
        func()
    },1000)
}

function step2(func){
    setTimeout(()=>{
        console.log("step2 completed");
        func()
    },1000)
}

function step3(func){
    setTimeout(()=>{
        console.log("step3 completed");
        func()
    },1000)
}


step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All steps finished.");
            
        })
    })
})