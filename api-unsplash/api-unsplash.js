const catImages = document.querySelector(".cat__images");

async function getImages(){
    let response = await fetch('https://api.unsplash.com/search/photos?query=cats&client_id=676f87eea05b764fd60059722d018ed889ef90819dfc1b22e9f6e562e2868aed&orientation=landscape&per_page=25');
    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;
    createImages(imagesList);
}

function createImages(imagesList){
    for(let i = 0 ; i < imagesList.length ; i++ ) {
        const image = document.createElement('img');
        image.src = imagesList[i].urls.thumb;
        catImages.appendChild(image);
    }
}

getImages('cats');