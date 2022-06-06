// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const containerHtml = document.getElementById("container-html")

const listaBiciclette = [
    {
        nome: "GoBike 497",
        peso: 11,
    },
    {
        nome: "Super Run 300",
        peso: 7,
    },
    {
        nome: "Bicyclet HCK",
        peso: 13,
    },
    {
        nome: "Mountin Bike 900m",
        peso: 10,
    },
    {
        nome: "CityBike fun",
        peso: 15,
    },
    {
        nome: "PlatinumBike 100",
        peso: 9,
    },
]

// Cerco la bici con peso minore usando destructuring

const {nome, peso} = listaBiciclette [0];

let biciPiuLeggera = {
    nome,
    peso,
    indice: 0,
}

for (let i = 1; i < listaBiciclette.length; i++) {
    const {nome, peso} = listaBiciclette [i]

    if (peso < biciPiuLeggera.peso) {
    biciPiuLeggera = {
        nome,
        peso,
        indice: i
        }
    }

    const print = `<div class="row mt-5 justify-content-center">
                        <div class="col-5 mt-3 text-center">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">La nostra bicicletta più leggera:</h5>
                                <h3 class="card-text">${biciPiuLeggera.nome}</h3>
                                <img src="img/felt-vr-performance-105-black-glitter-1.jpeg" class="img-fluid" alt="${biciPiuLeggera.nome}">
                                <p class="card-text"><strong>Peso: ${biciPiuLeggera.peso},00 kg</strong></p>
                                <a class="btn btn-primary" href="#" role="button">Acquistala subito</a>
                                </div>
                            </div>
                        </div>
                    </div>`;

containerHtml.innerHTML = print;

}

console.log(biciPiuLeggera);

