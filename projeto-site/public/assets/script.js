const typer = document.querySelector ("#typer");
const typerBtn = document.querySelector ("#typer__btn");
const tweets = document.querySelector ("#tweets");
const counter = document.querySelector ("#counter");


// MENU 

const menuHamburguer = document.querySelector ("#menu");
const menu = document.querySelector (".menu__links");

menuHamburguer.addEventListener ('click', function () {
    if (menu.style.height){
        menu.style.height = null;        
    } else {
        menu.style.height = "3rem";
    }  
});


// FUNÇÃO TWEETAR

typerBtn.addEventListener ('click', function (){
    
    if(typer.value != 0) {
        tweets.innerHTML += `
        <div class="tweets__container">
            <div class="tweets__user">
                <img src="http://placekitten.com/30" alt="">
                <p>Usuario</p>
            </div>
            <p>${typer.value}</p>
            <div class="tweets__btn">
                <img class="tweets__like" src="assets/img/like-red.svg" alt="Ícone de coração">
            </div>
        </div>
        `;
    } 
    typer.value = "";
    counter.innerHTML = "0";
    
    configLoves();
});


// CONTADOR

typer.addEventListener('input', function (){
    
    counter.innerHTML = typer.value.length;
    if (typer.value.length < 140) {
        counter.style.color = "black";
        counter.style.fontWeight = "none";
        typerBtn.disabled = false;
        
    } else {
        counter.style.color = "red";
        counter.style.fontWeight = "bold";
        typerBtn.disabled = true;  
    }
});


// FUNÇÃO LIKE

function configLoves() {
    let likes = document.getElementsByClassName ("tweets__like");
    
    for (let i = 0; i < likes.length; i++) {
        
        likes[i].addEventListener('click', function() {
            
            if(this.style.filter == "none") {
                this.style.filter = "grayscale(100%)";
            } else {
                this.style.filter = "none";
            }        
        });
    }
}