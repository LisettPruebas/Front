/*Eliminar Elementos de una Lista
Modificar el ejercicio anterior para que cada elemento generado tenga un botón
de "Eliminar" que borre solo ese elemento de la lista*/

const lista = document.getElementById("lista")
const botonAgregar = document.getElementById("agregar")

let contador = 1;

botonAgregar.addEventListener("click" , () => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent =  `Elemento ${contador} `;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click" , () => {
        lista.removeChild(nuevoElemento);

    });

    nuevoElemento.appendChild(botonEliminar);
    lista.appendChild(nuevoElemento);

    contador++;
});