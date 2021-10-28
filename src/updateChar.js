import "regenerator-runtime/runtime";

const addPutForm = document.querySelector('.add-put-form')
const idOfTheCharacter=localStorage["stored"] ;
const url = `https://character-database.becode.xyz/characters${idOfTheCharacter}`
const inputImage = document.querySelector('#img')
const inputPreview = document.querySelector('#preview')


//Put request 
  addPutForm.addEventListener('submit',async (e)=>{
        e.preventDefault()

        let formData = {
            name:document.querySelector('#name').value,
            image:inputPreview.src.split(',')[1],
            description:document.querySelector('#longDescription').value,
            shortDescription:document.querySelector('#shortDescription').value
        }
        if(formData.name && formData.image && formData.description && formData.shortDescription) {

            const result = await fetch(url, {
                method: 'PUT',
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
console.log(addPutForm);

     