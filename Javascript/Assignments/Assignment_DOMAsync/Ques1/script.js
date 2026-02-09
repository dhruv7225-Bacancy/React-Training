const smsg=document.getElementById("secret-message")
const btn=document.getElementById("btn")

btn.addEventListener("click",()=>{
    smsg.innerText="You found the secret message!"
})
