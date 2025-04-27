/*Crear una función que reciba un array de números y devuelva un nuevo array que
contenga solo los números pares.*/

nums = [ 678, 9876, 98, 65, 33, 45, 88, 23, 87, 22, 44, 96];

x = [ 2, 1, 3, 5, 8];



function numerosPares1(arrayRecibido){

   let nuevoArray = [];

    for(i = 0; i < nums.length; i++){

        if(nums[i] % 2 == 0){
            console.log("Estoy pusheando: " + nums[i]);
            nuevoArray.push(nums[i]);
        }
    }

    return nuevoArray;

}

numerosPares1();