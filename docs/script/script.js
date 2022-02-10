//  Si uso esto fuera de un form,ejm un div <button onclick="boton()">Ocultar</button>
//  Tengo que usar el siguiente codigo;


function boton() {
    let dato1 = document.getElementById('entradaDeNombre').value;
    let dato2 = document.getElementById('entradaDeApellido').value;
    let dato3 = document.getElementById('resul');

    if (!dato1 || !dato2) {
        alert("ERROR: Ingrese el formulario");
        return false;
    }

    if (dato1 == "Lucas" && dato2 == "Alegre") {
        dato3.innerHTML = "Hola: " + dato1 + " " + dato2 + " Tu eres mi creador, TE AMO <3 |:)";
    } else {
        if (dato1 == "Aye" && dato2 == "Vega") {
            dato3.innerHTML = "Hola: " + dato1 + " " + dato2 + " Tu eres la mujer de mi creador, A TI TAMBIEN TE AMO <3 |:)";
        } else {
            dato3.innerHTML = "Buenos dias: " + dato1 + " " + dato2 + " Que usted tenga un Bonito Día |:)";
        }
    }





}


//--------------lOS DOS CODIGOS ANDAN.-----------------
//   Si uso esto dentro de un form <button type="button" id="boton">Ocultar</button>
//   Tengo que usar elsiguiente codigo
/*const dato1 = document.querySelector("#entradaDeNombre");
const dato4 = document.querySelector("#entradaDeApellido");
const dato2 = document.querySelector("#resul");
const dato3 = document.querySelector("#boton");

dato3.addEventListener("click",function(){

dato2.innerHTML = "Buenod días: "+ dato1.value + " "+dato4.value+" Que tengas un dia maravilloso |:)";
//Con innerHtml lo lee, pero con text conten NO;
});*/



