var typer = document.querySelector ("#typer");
var typerBtn = document.querySelector ("#typer__btn");
var tweets = document.querySelector ("#tweets");
var counter = document.querySelector ("#counter");
var menuHamburguer = document.querySelector ("#menu");
var menu = document.querySelector (".menu__links");


// MENU 

menuHamburguer.addEventListener ('click', function () {
    if (menu.style.height){
        menu.style.height = null;        
    } else {
        menu.style.height = "3rem";
    }  
})


// FUNÇÃO TWEETAR

typerBtn.addEventListener ("click", function (){
    let tweet = document.createElement ("p");
    tweets.appendChild(tweet);
    tweet.innerHTML = (typer.value);
    typer.value = " ";
    counter.innerHTML = "0";
});


// CONTADOR

typer.addEventListener("input", function (){
    counter.innerHTML = typer.value.length;
    if(typer.value.length > 140) {
        counter.style.color = "red";
        counter.style.fontWeight = "bold";
        console.log("oi");
    } else {
        counter.style.color = "black";
        counter.style.fontWeight = "none";
    }
});






