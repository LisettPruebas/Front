/*Imprimir con Retraso
Usar una función flecha y setTimeout para imprimir cada elemento de un array
con un retraso de 1 segundo por elemento.*/

const miRetraso = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

for(let i = 0; i<miRetraso.length; i++){
        setTimeout(() => {                  //ejecuta console.log después de 1 seg//
            console.log(miRetraso[i])
                                            //muestra el valor que está en miRetraso[i]//
        }, i * 1000);

}


/*Con foreach*/

const miRetraso2 = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

miRetraso2.forEach((valorElemento, indice) => {   //el metodo de los arrays foreach recorre cada elemento, acá recibe 2 parametros//
     setTimeout(() => {
        console.log(valorElemento);
     }, indice * 1000);
});


