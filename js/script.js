
import "regenerator-runtime/runtime";
//const axios = require('axios');

const template = document.querySelector('#character-tpl');
const edit = document.querySelector('#update-character');
const imageBase64 = "data:image/jpeg;base64";
const makeCharacterCardsAppear = document.querySelector("#display-card-character");
const addPostForm = document.querySelector('.add-post-form')
const url = 'https://character-database.becode.xyz/characters'
const inputImage = document.querySelector('#img')
const inputPreview = document.querySelector('#preview')


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

        //Store id of the character in localStorage
       buttonOfTheCharacter.addEventListener('click', ()=>{
           localStorage["stored"]=elem.id;

       });


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

    inputImage.addEventListener('change', () =>{
    const fileReader = new FileReader()
        fileReader.readAsDataURL(inputImage.files[0])
        fileReader.onload = ()=>
        {
            inputPreview.src = fileReader.result
        }
    })
 
    // partie POST cards
    addPostForm.addEventListener('submit',async (e)=>{
        e.preventDefault()

        let formData = {
            name:document.querySelector('#name').value,
            image:inputPreview.src.split(',')[1],
            description:document.querySelector('#longDescription').value,
            shortDescription:document.querySelector('#shortDescription').value
        }
        if(formData.name && formData.image && formData.description && formData.shortDescription) {

            const result = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            location.reload();
        }
        else
        {
            alert('champs vides')
        }
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
          location.reload();
      }
  });

  //Put request 
//   document.querySelector("#save").addEventListener('click', async()=>{
//       let idEdit = localStorage["stored"];
//       let alertSureOrNot = confirm('Sure you want to edit ?');
//       if (alertSureOrNot != true) {
          
//       }else{
         
//           let formData = {
//             name:document.querySelector('#name').value,
//             image:inputPreview.src.split(',')[1],
//             description:document.querySelector('#longDescription').value,
//             shortDescription:document.querySelector('#shortDescription').value
//         }
//         if(formData.name && formData.image && formData.description && formData.shortDescription) {

//             const result = await fetch(url, {
//                 method: 'PUT',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(formData)
//             });
//             location.reload();
//         }
//         else
//         {
//             alert('champs vides')
//         }
//       }
//   })
  
  


// Display all cards
makeDisplayCardAppear();









 