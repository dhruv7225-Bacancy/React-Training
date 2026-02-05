
addButton=document.getElementById("add-button")
listCont=document.getElementById("lists")

addButton.addEventListener("click",()=>{
    inputTxt=document.getElementById("todo")
    list=document.createElement("li")
    
    list.append(inputTxt.value);

    list.className="list"
    listCont.append(list)
    inputTxt.value="";

    let span=document.createElement("span")
    span.innerHTML="\u00d7";
    span.className="cross"
    list.appendChild(span)
    setData()
})

lists.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
    setData()
})
listCont.innerHTML=localStorage.getItem("data")
function setData(){

    localStorage.setItem("data",listCont.innerHTML)
}