import { leerFichero } from "./fetch_try.js";

export async function generarTarjetas() {

    //invoca a la funcion y almacena los datos de la misma
    let dataArtista = await leerFichero();

    let contenedorCards = document.querySelector("#cards")

    dataArtista.artistas.forEach(valor => {


        let card = document.createElement("article");
        card.setAttribute("class", "box_style");
        let divCard = document.createElement("div");
        divCard.setAttribute("class", "card_contents");
        let nomArtista = document.createElement("h3");
        let descriptionArtista = document.createElement("p");
        let pictureArtista = document.createElement("picture");
        let sourceArtista = document.createElement("source");
        let imgArtista = document.createElement("img");
        let divModal = document.createElement("div");
        divModal.setAttribute("class", "veure");
        let enlaceModal = document.createElement("button");
        enlaceModal.setAttribute("id", "btn_veure");
        enlaceModal.setAttribute("type", "button");


        nomArtista.textContent = valor.nom;
        descriptionArtista.textContent = valor.description;
        enlaceModal.textContent = valor.modal;

        sourceArtista.srcset = valor.img.srcset;
        imgArtista.src = valor.img.src;
        imgArtista.alt = valor.img.alt;

        card.appendChild(pictureArtista);

        // <article><picture></picture></article>

        pictureArtista.appendChild(sourceArtista);
        pictureArtista.appendChild(imgArtista);
        //<picture><img></picture>

        card.appendChild(divCard);


        divCard.appendChild(nomArtista);

        //<picture><img></picture>
        //<h3></h3>


        divCard.appendChild(descriptionArtista);
        //<picture><img></picture>
        //<h3></h3>
        //<p></p>

        card.appendChild(divModal);

        divModal.appendChild(enlaceModal);

        //<picture><img></picture>
        //<h3></h3>
        //<p></p>
        //<button></button>

        contenedorCards.appendChild(card);


        let $btnModal = document.querySelector("#btn_veure");

        let artistDialog = document.querySelector("#artist_dialog");

        $btnModal.addEventListener("click", () => {

            artistDialog.show();

        })



    });



};

let artistDialog = document.querySelector("#artist_dialog");


let $btnModalclose = document.querySelector("#btn_close");

$btnModalclose.addEventListener("click", () => {
    artistDialog.close();
})


