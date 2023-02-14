console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const init = () => {
    const mainDiv = document.getElementById('dog-image-container');
    let urlArray = [];

    fetch(imgUrl)
        .then(res => res.json())
            .then(object => {
                urlArray = [...object["message"]];
                urlArray.forEach(url => {
                    const img = document.createElement('img');
                    img.src = url;
                    mainDiv.appendChild(img);
                })
                });
                
};
            

document.addEventListener('DOMContentLoaded', init);


// Challenge 1: complete
// Challenge 2: 