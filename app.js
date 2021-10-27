
const inputBox = document.getElementById("input_box");
const form = document.querySelector("form")
const addBtn = document.getElementById("add_btn");
const ulList = document.getElementById("ul_list")

addBtn.addEventListener("click", ()=> {
    const tdlist = inputBox.value;
    if (! tdlist) {
        alert("Plesa enter a task!")
    }else{
        ulList.innerHTML += `<li id= "list_id" ><input type="checkbox" name="" id="check_box">${tdlist} <button id="delete_btn" <i class="fa-solid fa-trash-can"></i > </button></li>`
        
    }
    ulList.querySelectorAll("button").forEach((button) => {
       button.addEventListener("click", ()=> {
        button.closest("li").remove(); 
        
    })

})})
