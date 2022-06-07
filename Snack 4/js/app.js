/* Snack 4
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: ‘Marco’, id: 213, grades: 78 },
    { name: ‘Paola’, id: 110, grades: 96 }, 
    { name: ‘Andrea’, id: 250, grades: 48 },
    { name: ‘Gaia’, id: 145, grades: 74 },
    { name: ‘Luigi’, id: 196, grades: 68 },
    { name: ‘Piero’, id: 102, grades: 50 },
    { name: ‘Francesca’, id: 120, grades: 84 },
];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo.
Ci serve quindi un nuovo array di stringhe.
Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */


let students = [
    { name: "Marco",id: 213, grades: 78 },
    { name: "Paola", id: 110, grades: 96 },
    { name: "Andrea", id: 250, grades: 48 },
    { name: "Gaia", id: 145, grades: 74 },
    { name: "Luigi", id: 196, grades: 68 },
    { name: "Piero", id: 102, grades: 50 },
    { name: "Francesca", id: 120, grades: 84 },
];
console.log(" ---- Array iniziale ---- ");
console.log(students);

//  ---   1   ---

const upperCaseStudents = students.map((student, i, arrayStudents) => {
    return student.name.toUpperCase();
});

console.log(" ---------- 1 ---------- ");
console.log(upperCaseStudents);

//  ---   2   ---

const over70 = students.filter((student, i) => {

    return student.grades > 70

});

console.log(" ---------- 2 ---------- ");
console.log(over70);

//  ---   3   ---

// const over70AndId = students.filter((student, i, arrayStudents) => {
//     if (student.grades > 70 && student.id > 120) {
//         return true;
//     } else {
//         return false;
//     }
// })

const over70AndId = students.filter((student) => {
    return student.grades > 70 && student.id > 120
})

console.log(" ---------- 3 ---------- ");
console.table(over70AndId)
