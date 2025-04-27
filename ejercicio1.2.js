/*Crear una función que reciba un array de números y devuelva un nuevo array que
contenga solo los números pares.*/



function NumerosPares2(arrayRecibido) {
   
    let numerosPares = [];

   
    for (let i = 0; i < arrayRecibido.length; i++) {
      
        if (arrayRecibido[i] % 2 == 0) {
         
            numerosPares.push(arrayRecibido[i]);
        }
    }


    return numerosPares;
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = NumerosPares2(numeros);


console.log(pares);










