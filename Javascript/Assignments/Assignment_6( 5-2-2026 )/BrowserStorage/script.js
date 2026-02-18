function save() {
    input = document.getElementById("name")
    localStorage.setItem("name", input.value)
    sessionStorage.setItem("name", input.value)
    document.getElementById("savedText").innerText = "Data Added successfuly to both storage"
}
function load() {
    document.getElementById("savedText").innerText = ""
    input = document.getElementById("name")
    loadedText = document.getElementById("loadedText")
    let txt = "Loaded from local storage : " + localStorage.getItem("name")
    txt += "\n Loaded from session storage : " + sessionStorage.getItem("name")
    loadedText.innerText = txt
}