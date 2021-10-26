import "regenerator-runtime/runtime";

const axios = require('axios');
const template = document.querySelector('#character-tpl');
const imageBase64 = "data:image/jpeg;base64";
const makeCharacterCardsAppear = document.querySelector("#display-card-character");

const makeDisplayCardAppear = async () => {
    const api = await fetch('https://character-database.becode.xyz/characters'); 
  let response = await api.json();
  console.log(response);
     
  for (let elem of response) {
  // display characters cards 
    
    let characterTemplate = document.importNode(template.content, true);
    let nameOfTheCharacter = characterTemplate.querySelector(".name-home");
    let shortDescriptionCharacter = characterTemplate.querySelector(".description-home");
    let pictureOfTheCharacter = characterTemplate.querySelector(".photo-home");
    

    nameOfTheCharacter.textContent = elem.name;
    shortDescriptionCharacter.textContent = elem.shortDescription;
    pictureOfTheCharacter.src = `${imageBase64}, ${elem.image}`;
    
    
    //display characters details in modal (see character).
    let nameModal = document.querySelector(".modal-title");
    let descModal = document.querySelector(".modal-body");
    let imageModal = document.querySelector(".image-modal");
   

    nameModal.textContent = elem.name;
    descModal.textContent = elem.description;
    imageModal.src = `${imageBase64},${elem.image}`;
    
    
    
    makeCharacterCardsAppear.appendChild(characterTemplate);
}
    }

makeDisplayCardAppear();  

const changeModalsDetails = async () => {
  const getId = await fetch('https://character-database.becode.xyz/characters');
  const responseJson = await getId.json();
  console.log(responseJson);


  responseJson.forEach((item) => {
     //display characters details in modal (see character).
    let nameModal = document.querySelector(".modal-title");
    let descModal = document.querySelector(".modal-body");
    let imageModal = document.querySelector(".image-modal");
   

    nameModal.textContent = item.name;
    descModal.textContent = item.description;
    imageModal.src = `${imageBase64},${item.image}`;

    console.log(item.id);
  });
   
}
  


changeModalsDetails();



// document.querySelector("#see-character").addEventListener("click",async () => {
//   const getId = await fetch('https://character-database.becode.xyz/characters');
//   const responseJson = await getId.json();

  
// });


//Delete

//axios.delete('https://character-database.becode.xyz/characters');