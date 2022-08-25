const btnagregar = document.getElementById("agregar");
const cargaLista = [];


const items = JSON.parse(localStorage.getItem("item"))

if(items){
    items.forEach(item => agregoLista(item))
}



function agregoLista(text = document.getElementById("item").value){
    document.getElementById("item").value = "" 
    const contens = document.getElementById("contenedor");
    const note = document.createElement("li");
    note.classList.add('border');
    note.classList.add('border-start-0');

    note.innerHTML = text
    contens.appendChild(note)

    guardoLista(note.textContent)
}




function guardoLista(dato){
    cargaLista.push(dato)
    console.log(cargaLista)

    localStorage.setItem("item",JSON.stringify(cargaLista))
}



limpiar.addEventListener("click",function(){
    const lista = document.getElementById("contenedor")
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.lastChild);
        cargaLista.pop()
    }
    localStorage.clear("item")
})


console.log(cargaLista)