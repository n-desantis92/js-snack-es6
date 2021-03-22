// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// 2 step:
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// 3 step:
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// function generaNumeroRandom(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
//
// }
// var squadre = [
//   {
//     nome: "roma",
//     puntiFatti: 0,
//     falliSubiti: 0,
//   },
//   {
//     nome: "juventus",
//     puntiFatti: 0,
//     falliSubiti: 0,
//   },
//   {
//     nome: "napoli",
//     puntiFatti: 0,
//     falliSubiti: 0,
//   },
// ];
//
//
//
// for (var i = 0; i < squadre.length; i++) {
//
//   squadre[i].puntiFatti = generaNumeroRandom(0,3);
//   squadre[i].falliSubiti = generaNumeroRandom(0,12);
//
//   console.log(squadre[i]);
// }
//
//
// var squadreFalli = [];
//
// for (var i = 0; i < squadre.length; i++) {
//   var obj = {
//     nome: squadre[i].nome,
//     falliSubiti: squadre[i].falliSubiti
//   }
//
//   squadreFalli.push(obj);
// };
// console.log(squadreFalli);



/*Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

// funzioni
function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [
  {
    nome: "juventus",
    punti: 0,
    falli: 0,
  },
  {
    nome: "roma",
    punti: 0,
    falli: 0,
  },
  {
    nome: "lazio",
    punti: 0,
    falli: 0,
  },
  {
    nome: "napoli",
    punti: 0,
    falli: 0,
  }
];
console.log(squadre);

// Generare numeri random al posto degli 0 nelle proprietà:

// for (var i = 0; i < squadre.length; i++) {
//
//   squadre[i].punti = generaNumeroRandom(0,3);
//   squadre[i].falli = generaNumeroRandom(0,12);
//   console.log(squadre[i]);
//
// };

// con .map()

const squadre2 = squadre.map((element) => {
  element.punti = generaNumeroRandom(0,3);
  element.falli = generaNumeroRandom(0,12);
  // let {nome, falli} = element;
  // return {nome,falli};
  return {nome:element.nome, falli: element.falli};
});
console.log(squadre2);


/*Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const falliSquadra = [];

for (var i = 0; i < squadre.length; i++) {

  let {nome,falli} = squadre[i];
  console.log(nome,falli);
  falliSquadra.push(`la ${nome} a subito ${falli} falli`);
};

console.log(falliSquadra);

console.log();
