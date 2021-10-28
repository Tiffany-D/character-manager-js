
import "regenerator-runtime/runtime";
//const axios = require('axios');

const template = document.querySelector('#character-tpl');
const imageBase64 = "data:image/jpeg;base64";
const makeCharacterCardsAppear = document.querySelector("#display-card-character");


// Display all cards
const makeDisplayCardAppear = async () => {
    const api = await fetch('https://character-database.becode.xyz/characters');
    let response = await api.json();
    console.log(response);

    for ( let elem of response) {
        let characterTemplate = document.importNode(template.content, true);
        let nameOfTheCharacter = characterTemplate.querySelector(".name-home");
        let shortDescriptionCharacter = characterTemplate.querySelector(".description-home");
        let pictureOfTheCharacter = characterTemplate.querySelector(".photo-home");
        let buttonOfTheCharacter = characterTemplate.querySelector("#see-character");


        nameOfTheCharacter.textContent = elem.name;
        buttonOfTheCharacter.setAttribute("idChar",elem.id)
        shortDescriptionCharacter.textContent = elem.shortDescription;
        pictureOfTheCharacter.src = `${imageBase64}, ${elem.image}`;
        makeCharacterCardsAppear.appendChild(characterTemplate);

        //Store id of the character in localStorage
       buttonOfTheCharacter.addEventListener('click', ()=>{
           localStorage["stored"]=elem.id;

       });


    }

    const getCharDetails = async (id) => {
       const response = await fetch(`https://character-database.becode.xyz/characters/${id}`)
       return await  response.json()
    }

    const seeBtn = document.querySelectorAll('#see-character') // selection de tous les boutons
    seeBtn.forEach(el => {
        el.addEventListener('click', async () => { // ajout event click à travers tous les boutons
            const char = await getCharDetails(el.getAttribute('idchar')) // On prend l'id + affichage de l'objet api lié a l'ID
            showCard(char)
        })
    })
}

const showCard = async (char) => // on défini les values aux champs 
{
    document.querySelector('.modal-title').textContent = char.name
    document.querySelector('.modal-image').src = `data:image/jpeg;base64,${char.image}`
    document.querySelector('.long-description').textContent = char.description
}

//Delete request

  document.querySelector("#delete").addEventListener ("click", async()=>{
      let idOfTheCharacter=localStorage["stored"] ;
      let confirmAlert = confirm('Are you sure you want to delete this character ?');
      if (confirmAlert!= true) {
          console.log('cancel');
      }else{
          await fetch (`https://character-database.becode.xyz/characters/${idOfTheCharacter}`, { method: 'DELETE' });
          console.log('ok');
      }
  });
  




// Display all cards
makeDisplayCardAppear();







 