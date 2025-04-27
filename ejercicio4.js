/*Operación con Callback
Crear una función que reciba un callback y dos números, aplique el callback y
devuelva el resultado. Implementar al menos dos callbacks diferentes.*/

function bCallback(a,b , callback){
    return callback(a,b);
}

const suma = (x,y) => x + y;

const multiplicacion = (x, y) => x * y;

console.log(bCallback(3,4, suma));
console.log(bCallback(3,4, multiplicacion));

function reciboCallBack(num1, num2, callback){
    return callback(num1, num2);
}

const resta = (z, q) => z - q;
const division = (z, q) => z % q;

console.log(reciboCallBack(20, 5, resta));
console.log(reciboCallBack(20, 5, division));

function pCallBack(valor1, valor2, callback){
    return callback(valor1, valor2);
}

const suma2 = (k, t) => k + t;
const resta2 = (k, t) => k - t;

console.log(pCallBack(8, 9, suma2));
console.log(pCallBack(8, 9, resta2));