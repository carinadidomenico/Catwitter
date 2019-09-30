var typer = document.querySelector ("#typer");
var typerBtn = document.querySelector ("#typer__btn");
var tweets = document.querySelector ("#tweets");

typerBtn.addEventListener ("click", function (){
    let tweet = document.createElement ("p");
    tweets.appendChild(tweet);
    tweet.innerHTML = (typer.value);
    typer.value = " ";
})

