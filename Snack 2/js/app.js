/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
solo nomi e falli subiti e stampiamo tutto in console.
*/

const footballTeams = [
    {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0,

    },
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0,

    },
    {
        nome: "Inter",
        punti_fatti: 0,
        falli_subiti: 0,

    },
    {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0,

    },
    {
        nome: "Napoli",
        punti_fatti: 0,
        falli_subiti: 0,

    },
    {
        nome: "Atalanta",
        punti_fatti: 0,
        falli_subiti: 0,

    },
]

// const { nome, punti_fatti, falli_subiti} = footballTeams;

const falliSubitilist = [];

for (let i = 0; i < footballTeams.length; i++) {
    const punti_fatti = Math.floor(Math.random() * 50);

    footballTeams[i].punti_fatti = punti_fatti;

    const falli_subiti = Math.floor(Math.random() * 30);

    footballTeams[i].falli_subiti = falli_subiti;

    const nome = footballTeams[i].nome

    falliSubitilist.push({nome, falli_subiti})

}

console.table(footballTeams)
console.table(falliSubitilist)

console.log(falliSubitilist)
