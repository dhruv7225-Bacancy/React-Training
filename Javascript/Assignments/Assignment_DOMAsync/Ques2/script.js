const boxArr=document.querySelectorAll(".box")
const btn=document.querySelector(".btn")
btn.addEventListener("click",()=>{

    boxArr.forEach((box)=>{
        box.style.backgroundColor="lightblue"
    })
})
