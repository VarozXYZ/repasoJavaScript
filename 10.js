/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

/* ordenarArray(arr, orden)
Entrada: arr = [5, 2, 9, 1, 6]
orden = "Asc"
Salida: [1, 2, 5, 6, 9] */

function ordenarArray(arr, orden) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i]);
    }
    
    for (let i = 0; i < resultado.length - 1; i++) {
        for (let j = 0; j < resultado.length - 1 - i; j++) {
            let debeIntercambiar = false;
            
            if (orden === "Asc") {
                debeIntercambiar = resultado[j] > resultado[j + 1];
            } else if (orden === "Desc") {
                debeIntercambiar = resultado[j] < resultado[j + 1];
            }
            
            if (debeIntercambiar) {
                let temp = resultado[j];
                resultado[j] = resultado[j + 1];
                resultado[j + 1] = temp;
            }
        }
    }
    
    return resultado;
}

console.log(ordenarArray([5, 2, 9, 1, 6], "Asc"));
console.log(ordenarArray([5, 2, 9, 1, 6], "Desc"));

