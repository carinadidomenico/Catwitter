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


var likes = document.getElementsByClassName ("tweets__like");
console.log(likes)


for(var i = 0; i < likes.length; i++) {
    console.log(likes)
    console.log(i)
    likes[i].addEventListener('click', function() {
        var like = this.nextElementSibling;
        console.log("olar")

        if(like.style.filter == "grayscale(100%)") {
            like.style.filter = "none";
        } else {
            like.style.filter = "grayscale(100%)";
        }        
    });
}

// likes.forEach ((like)=>{
//     like.addEventListener('click', function() {
//         console.log('oi');
//         if(like.style.filter == "grayscale(100%)") {
//             like.style.filter = "none";
//         } else {
//             like.style.filter = "grayscale(100%)";
//         } 
//     });
// });