/* Snack 3
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter. */

const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];


let newArray = [];

let minNumber = 2;
let maxnumber = 5;

const forEachCycle = myArray.forEach((elementoCorrente, i) => {

    if (i >= minNumber && i < maxnumber) {
        newArray.push(elementoCorrente)
    }
})

console.log(newArray)

let newFilterArray = [];

const filterCycle = myArray.filter((elementoCorrente, i) => {
    if (i >= minNumber && i < maxnumber) {
        return newFilterArray.push(elementoCorrente)
    }
})

console.log(newFilterArray)



