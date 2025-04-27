/*Escribir una función que tome un array de números y calcule el promedio.*/

function calcularPromedio(numeros){
        
    let sumaDeTodos = 0;

    for(let i = 0; i < numeros.length; i++){
        sumaDeTodos += numeros[i];
    }

    const promedio = sumaDeTodos/numeros.length;
    return promedio;
}

const probar = [10,20,40];
const promedio = calcularPromedio(probar);
console.log(promedio);