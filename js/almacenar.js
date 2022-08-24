const btnagregar = document.getElementById("agregar");
const limpiar = document.getElementById("limpiar")
let almacenaItems = [];
const lista = document.getElementById("contenedor")


btnagregar.addEventListener("click",function(){
    let item = document.getElementById("item").value;
    localStorage.setItem("item", item)
    almacenaItems.push(localStorage.getItem("item")) 
    let htmlContentToAppend = "";

    for(let i = 0; i < almacenaItems.length; i++){ 
        let elemento = almacenaItems[i]
        if(almacenaItems[i]){
        htmlContentToAppend += `
        <li class="border border-start-0" >`+ elemento  +  `</li>

        `
        document.getElementById("contenedor").innerHTML = htmlContentToAppend; 
        document.getElementById("item").value = "" }
    }


})


limpiar.addEventListener("click",function(){
    const lista = document.getElementById("contenedor")
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
        almacenaItems = []
    }
})

function recuperoValores(){
    item.value = localStorage.getItem("item")
    lista.innerHTML += almacenaItems.length;
}

document.addEventListener("DOMContentLoaded", recuperoValores()); //esto es para que se muestre, pero me parece que se está sobreescribiendo.
