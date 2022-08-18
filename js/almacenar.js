const btnagregar = document.getElementById("agregar");
let almacenaItems = [];


btnagregar.addEventListener("click",function(){
    let item = document.getElementById("item").value;
    localStorage.setItem("item", item)
    almacenaItems = localStorage.getItem("item")
    console.log(almacenaItems.length);

    let htmlContentToAppend = "";

    for(let i = 1; i < almacenaItems.length; i++){ 
        let elemento = almacenaItems[i] 
        htmlContentToAppend += `
        <li class="border border-start-0" >`+ elemento  +  `</li>

        `
        document.getElementById("contenedor").innerHTML = htmlContentToAppend; 
    }


})


