//navbar-menu
//btn-burguer
//card-container
const burguerBtn = document.querySelector(".btn-burguer");
const navMenu = document.querySelector(".navbar-menu");

const cards = document.querySelector(".card-container");
burguerBtn.addEventListener("click", () =>{
    if (cards !== null) cards.classList.toggle("toggle-visibility");
    
    navMenu.classList.toggle("navbar_visible");
    
    if(navMenu.classList.contains("navbar_visible")){
        burguerBtn.setAttribute("aria-label", "Cerrar menu");

    } else{
        burguerBtn.setAttribute("aria-label", "Abrir menu");

    } 
});


const time = document.getElementById('clock');

const interval = setInterval(() => {

    const local = new Date();
    time.innerHTML = local.toLocaleTimeString();
}, 1000);
