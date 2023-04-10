const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".nav_menu_items")
hamburger.onclick = () => {
   
    navBar.classList.toggle("active")
    document.getElementsByClassName("nav_menu_items").style.transition = "all 2s"
    
}




console.log("Всё работает, и это реально должен быть браузер")