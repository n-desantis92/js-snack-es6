// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

// var biciclette = [
//   {
//     nome: "scott",
//     peso: 1000
//   },
//   {
//     nome: "graziella",
//     peso: 800
//   },
//   {
//     nome: "atlas",
//     peso: 500
//   }
// ];
//
// var biciLeggera = biciclette[0];
//
// for (var i = 0; i < biciclette.length; i++) {
//
//
//     if (biciclette[i].peso < biciLeggera.peso ) {
//
//       biciLeggera = biciclette[i];
//     }
// }
// console.log(biciLeggera);



// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// const biciclette = [
//   {
//     nome: "scott",
//     peso: 1000
//   },
//   {
//     nome: "graziella",
//     peso: 800
//   },
//   {
//     nome: "atlas",
//     peso: 500
//   },
//
// ];
// // Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
//
// let biciLeggera = biciclette[0];
//
// for (var i = 0; i < biciclette.length; i++) {
//
//   let {peso} = biciclette[i];
//   console.log(peso);
//     if ( peso < biciLeggera.peso ) {
//
//       biciLeggera = biciclette[i];
//     }
// }
//
// console.log(biciLeggera);
//
// const {nome,peso} = biciLeggera;
//
// console.log(`la bici piu leggera è: ${nome} ed il suo peso è: ${peso}`);


// con foreach

const biciclette = [
  {
    nome: "scott",
    peso: 1000
  },
  {
    nome: "graziella",
    peso: 800
  },
  {
    nome: "atlas",
    peso: 500
  },

];

let biciLeggera = [0];

biciclette.forEach((item, i,array) => {
  if (item.peso < biciLeggera.peso) {
    biciLeggera = item;
  }
});

console.log(biciLeggera);
