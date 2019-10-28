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
                    <p>Usuário</p>
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

// var likes = document.querySelectorAll(".tweets__like");

// likes.forEach(like => {
//     like.addEventListener('click', function(){
//         like.classList.toggle("tweets__like--red");
//         console.log(likes);
//     })
// })