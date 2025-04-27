/*<!--Cambiar Texto de Párrafos
Seleccionar todos los elementos p de la página y cambiar su texto al hacer clic
en un botón.-->*/

const parrafos = document.querySelectorAll("p");
const boton = document.getElementById("cambiar texto");

boton.addEventListener("click", () => {
    parrafos.forEach((parrafo, index) => {
        parrafo.textContent = `Este es el nuevo texto del parrafo ${index + 1}`;
    });
});
