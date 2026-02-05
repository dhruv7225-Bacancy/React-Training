const arr=document.querySelectorAll(".num");
const inputEle=document.getElementById("display");
opflag=false//op comes after one int
arr.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        inputEle.value+=`${btn.value}`
        opflag=true
    })
})
const op=document.querySelectorAll(".operations");
flag=true;//for one op only
function appendToDisplay(char){
    if(flag && opflag){
        inputEle.value+=char;
        flag=false;
        opflag=false;
    }
}
function clear1(){
    // alert("fbksd")
    inputEle.value="";
    flag=true
    opflag=false
}
function eval1(){
    if(inputEle.value!=""){
        inputEle.value=eval(inputEle.value)
        flag=true
        opflag=true
    }
}