var typer = document.querySelector ("#typer");
var typerBtn = document.querySelector ("#typer__btn");
var tweets = document.querySelector ("#tweets");
var counter = document.querySelector("#counter");


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






