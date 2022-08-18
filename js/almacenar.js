const btnagregar = document.getElementById("agregar");
let almacenaItems = [];


btnagregar.addEventListener("click",function(){
    let item = document.getElementById("item").value;
    localStorage.setItem("item", item)
    almacenaItems.push(localStorage.getItem("item")) 
    let htmlContentToAppend = "";

    for(let i = 0; i < almacenaItems.length; i++){ 
        let elemento = almacenaItems[i]
        htmlContentToAppend += `
        <li class="border border-start-0" >`+ elemento  +  `</li>

        `
        document.getElementById("contenedor").innerHTML = htmlContentToAppend; 
    }


})


