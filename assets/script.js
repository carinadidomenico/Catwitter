const typer = document.querySelector ("#typer");
const typerBtn = document.querySelector ("#typer__btn");
const tweets = document.querySelector ("#tweets");
const counter = document.querySelector ("#counter");
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


// FUNÇÃO TWEETAR

typerBtn.addEventListener ("click", function (){
    let tweet = document.createElement ("p");
    tweets.appendChild(tweet);

    tweet.innerHTML = `
        <div class="tweets__container">
            <div class="tweets__user">
                <img src="http://placekitten.com/30" alt="">
                <p>Usuário</p>
            </div>
            <p>${typer.value}</p>
        </div>
    `;
    typer.value = " ";
    counter.innerHTML = "0";
});


// CONTADOR

typer.addEventListener("input", function (){
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









