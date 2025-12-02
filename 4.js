/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

/* decimal = 10

El número 10 en binario es: 1010 */

function decimalToBinary(n) {
    let remainder = 0;
    let result = n;
    let binary = "";
    do {
        remainder = result % 2;
        binary += remainder.toString();
        result = Math.floor(result / 2);
    } while (result != 0)
    
    return parseInt(binary.split("").reverse().join(""));
}

console.log(decimalToBinary(10));