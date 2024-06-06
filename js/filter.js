let $totesBtn = document.querySelector("#totes");
let $hboBtn = document.querySelector("#hbo");
let $nfBtn = document.querySelector("#netflix");
let $filminBtn = document.querySelector("#filmin");
let $primeBtn = document.querySelector("#prime");
let $disneyBtn = document.querySelector("#disney");

let articulos = document.getElementsByClassName("serie");

$totesBtn.addEventListener("click", ()=> filtrarArticulos("totes"));
$hboBtn.addEventListener("click", ()=>filtrarArticulos("hbo"));
$nfBtn.addEventListener("click", ()=>filtrarArticulos("netflix"));
$filminBtn.addEventListener("click", ()=>filtrarArticulos("filmin"));
$primeBtn.addEventListener("click", ()=>filtrarArticulos("prime"));
$disneyBtn.addEventListener("click", ()=>filtrarArticulos("disney"));



function filtrarArticulos(title){

    for(let i = 0; i < articulos.length; i++){

        let articulo = articulos[i];
        let articuloTitle = articulo.getAttribute("title");
        console.log(articulo);
        
        if ((title === "totes") || (articuloTitle === title)){

            articulo.classList.remove("ocultar");
            
        }else{
            articulo.classList.add("ocultar");
        }

    }

}