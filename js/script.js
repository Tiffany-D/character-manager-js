import "regenerator-runtime/runtime";
import "babel-polyfill";

const axios = require('axios');


document.querySelector('#see-character').addEventListener("click", async () => {
    
    const api = await axios.get('https://character-database.becode.xyz/characters');
    const arrayCharacters = api.data;
    console.log(arrayCharacters);
    arrayCharacters.forEach(element=> {
        console.log(element);
    });
    
})

function displayName() {
    const nameOfTheCharacter = document.querySelector('h5');
    
    
}

function displayDescription() {
    const shortDescription = document.querySelector('p');
}

function displayPicture() {
    const image = document.querySelector('img');
}
