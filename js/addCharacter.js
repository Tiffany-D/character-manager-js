// (() =>
// {
//     document.querySelector(".add").addEventListener("click", async() => {
//         const name = document.querySelector("#hero-name").value;
//         const alterEgo = document.querySelector("#hero-alter-ego").value;
//         const powers = document.querySelector("#hero-powers").value.split(", ");
//         if (name !== "" && alterEgo !== "" && powers !== "") {
//             const result = await fetch("http://localhost:3000/heroes", {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     name: name,
//                     alterEgo: alterEgo,
//                     abilities: powers
//                 })
//             });
//             console.log(await result.json());
//         }
//     });
// })();