import "regenerator-runtime/runtime";

const axios = require('axios');
const template = document.querySelector('#character-tpl');
const imageBase64 = "data:image/jpeg;base64";
const makeCharacterCardsAppear = document.querySelector("#display-card-character");

const makeDisplayCardAppear = async () => {
    const api = await fetch('https://character-database.becode.xyz/characters'); 
    let response = await api.json();
    console.log(response);
     
for ( let elem of response) {
    let characterTemplate = document.importNode(template.content, true);
    let nameOfTheCharacter = characterTemplate.querySelector(".name-home");
    let shortDescriptionCharacter = characterTemplate.querySelector(".description-home");
    let pictureOfTheCharacter = characterTemplate.querySelector(".photo-home");

    nameOfTheCharacter.textContent = elem.name;
    shortDescriptionCharacter.textContent = elem.shortDescription;
    pictureOfTheCharacter.src = `${imageBase64}, ${elem.image}`;
    
    makeCharacterCardsAppear.appendChild(characterTemplate);

    }
  }
makeDisplayCardAppear();  
