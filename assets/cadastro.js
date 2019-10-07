const menuHamburguer = document.querySelector ("#menu");
const menu = document.querySelector (".menu__links");



// MENU 

menuHamburguer.addEventListener ('click', function () {
    if (menu.style.height){
        menu.style.height = null;        
    } else {
        menu.style.height = "3rem";
    }  
})
