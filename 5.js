/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function factorial(n) {
    let factorial = 1;

    for (let i = n; i > 0; i--) {
        factorial *= i;
    }
    console.log(factorial);
    return factorial;
}

factorial(5) // 120
factorial(0) // 1 