// const axios = require('axios').default;
//
//
// function getCards()
// {
//     axios.get('https://character-database.becode.xyz/characters',
//
//         {
//             timeout: 5000
//         })
//         .then(res => showOutput(res.data))
//         .catch(err => console.error(err));
// }
//
//
// getCards()
//
// function showOutput(arrayCharacters) {
//
//     document.getElementById('res').innerHTML = `
//
//   <div class="card mt-3">
//     <div class="card-header">
//       Data
//     </div>
//     <div class="card-body">
//       <pre>${JSON.stringify(arrayCharacters, null, 2)}</pre>
//     </div>
//   </div>
//
//
//    <div class="col-xs-12 col-sm-8 col-md-6 col-lg-3 card">
//           <img src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" alt="lorem-picsum">
//           <h5>Name of the character</h5>
//           <p>Sumikat ito noong 1960s kasabay ng pag labas ng Letraset sheets na mayroong mga talata ng Lorem Ipsum, at kamakailan
//           lang sa mga desktop publishing software tulad ng.</p>
//           <button>See character</button>
//         </div>
// `;
// }