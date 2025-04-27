/*Crear una función que reciba un array de números y devuelva un nuevo array que
contenga solo los números pares.*/



nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13, 14, 15, 16, 17, 18, 19, 20]



function numerosPares(nums){

    let nuevoArray = []

    for(i =0; i < nums.length; i++ ){

        if (nums[i] % 2 == 0 ){

            console.log("voy a pushear el valor", nums[i])
            nuevoArray.push(nums[i])
        }
    }

    console.log(nuevoArray)
 }

 numerosPares(nums);
