
let titulo = document.getElementById("titulo");
console.log(titulo);

let Esporte = document.getElementsByClassName("Esporte");
console.log(Esporte);

let EsportesTag = document.getElementsByTagName("ul");
console.log(EsportesTag[0]);

let EsporteQS = document.querySelector(".Esporte");
console.log(EsporteQS.textContent);

let EsporteQSall = document.querySelectorAll(".Esporte");
console.log(EsporteQSall);

titulo.innerText = "Meus Esportes Favoritos";
titulo.innerHTML = "<span style='color:blue'> Meus Esportes Favoritos </span>";

let Lista = document.getElementById("Lista");

let novoElemento = document.createElement("li");
let NovoElemento = document.createElement("li");
novoElemento.innerText = "Natação";
NovoElemento.innerText = "Atletismo";

Lista.appendChild(novoElemento);
Lista.appendChild(NovoElemento);