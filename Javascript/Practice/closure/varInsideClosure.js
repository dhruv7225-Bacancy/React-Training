// function x(){
//     for(var i=0;i<5;i++){
//         setTimeout(()=>{
//             console.log(i); 
//         },i*1000)
//     }
// }

// x() //5,5,5,5,5

// function x(){
//     for(var i=0;i<5;i++){
//         var a=i
//         setTimeout(()=>{
//             console.log(a); 
//         },i*1000)
//     }
// }

// x() //4,4,4,4,4

// function x(){
//     for(var i=0;i<5;i++){
//         let a=i
//         setTimeout(()=>{
//             console.log(a); 
//         },i*1000)
//     }
// }

// x() //0,1,2,3,4

function x(){
    function closureFunction(i){

        setTimeout(()=>{
            console.log(i); 
        },i*1000)
    }
    for(var i=0;i<5;i++){
        closureFunction(i);
    }
}

x() //0,1,2,3,4