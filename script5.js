/*Contador con Botones
Crear un botón para incrementar y otro para decrementar un contador mostrado en
un elemento div. Actualizar el texto del div al hacer clic.*/

const contador = document.getElementById("contador");
const botonIncrementar = document.getElementById("Incrementar");
const botonDecrementar = document.getElementById("Decrementar");

let valor = 0;

//evento para incrementar
botonIncrementar.addEventListener("click", () => {
    valor++;
    contador.textContent = valor;

})

//evento para decrementar
botonDecrementar.addEventListener("click", () => {
    valor--;
    contador.textContent = valor;
})
