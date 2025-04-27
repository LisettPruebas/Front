/*Agregar Elementos a una Lista
Crear una lista desordenada vacía y un botón. Al hacer clic en el botón,
agregar un nuevo elemento a la lista con un número que se incremente
automáticamente.*/

const lista = document.getElementById("Lista");
const boton = document.getElementById("Agregar");

let contador = 1;

boton.addEventListener("click" , () => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = `Elemento contador ${contador}`;
    lista.appendChild(nuevoElemento);
    contador++;
});

