import "regenerator-runtime/runtime";
const axios = require('axios');

const template = document.querySelector('#character-tpl');
const imageBase64 = "data:image/jpeg;base64";
const makeCharacterCardsAppear = document.querySelector("#display-card-character");
const addPostForm = document.querySelector('.add-post-form')
const url = 'https://character-database.becode.xyz/characters'

// Display all cards
const makeDisplayCardAppear = async () => {
    const api = await fetch(url);
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
    }

    const getCharDetails = async (id) => {
       const response = await fetch(`${url}/${id}`)
       return await  response.json()
    }

    const seeBtn = document.querySelectorAll('#see-character') // selection de tous les boutons
    seeBtn.forEach(el => {
        el.addEventListener('click', async () => { // ajout event click à travers tous les boutons
            const char = await getCharDetails(el.getAttribute('idchar')) // On prend l'id + affichage de l'objet api lié a l'ID
            showCard(char)
        })
    })

    addPostForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log('form submited')
    })
}

const showCard = async (char) => // on défini les values aux champs
{
    document.querySelector('.modal-title').textContent = char.name
    document.querySelector('.modal-image').src = `data:image/jpeg;base64,${char.image}`
    document.querySelector('.long-description').textContent = char.description
}
// Display all cards
makeDisplayCardAppear();

