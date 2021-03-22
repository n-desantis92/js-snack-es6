"use strict";

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


// function arrayInterval(array,min,max) {
//
//     const newArray = [];
//     for (var i = 0; i < array.length; i++) {
//         if (i>= min && i <= max) {
//             newArray.push(array[i]);
//           }
//       console.log(newArray);
//     }
//     return newArray;
// };
//
// const lista = ["pomodori","carote","sedano","cipolla","salvia"];
//
// const nuovaLista = arrayInterval(lista,2,5);
//
// console.log(nuovaLista);




// con filter
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


// const lista = ["pomodori","carote","sedano","cipolla","salvia"];
//
// const lista2 = lista.filter((element,i) => i >= 2 && i <=5);
// console.log(lista2);

const lista = ["pomodori","carote","sedano","cipolla","salvia"];

function arrayInterval(array,min,max) {
  return array.filter((element,i) => i >= min && i <= max);
};

const nellaLista = arrayInterval(lista,1,3);
console.log(nellaLista);
