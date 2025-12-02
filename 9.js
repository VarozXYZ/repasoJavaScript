/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

/* compararArrays(arr1, arr2, buscarComunes)
Entrada: arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]
buscarComunes = true
Salida: [3, 4] */

function compararArrays(arr1, arr2, comunes) {
    if (comunes) {
        const commonArray = arr1.filter(n => {
            let common = false;
            for (let i = 0; i < arr2.length; i++) {
                if (n  == arr2[i]) {
                    common = true;
                }
            }
            return common;
        })

        console.log(commonArray);
    } else {
        let uniqueArray = [];

        const arr1unique = arr1.filter(n => {
            let unique = true;
            for (let i = 0; i < arr2.length; i++) {
                if (n  == arr2[i]) {
                    unique = false;
                }
            }
            return unique;
        })

        const arr2unique = arr2.filter(n => {
            let unique = true;
            for (let i = 0; i < arr1.length; i++) {
                if (n  == arr1[i]) {
                    unique = false;
                }
            }
            return unique;
        })

        arr1unique.forEach(n => {
            uniqueArray.push(n)
        });
        arr2unique.forEach(n => {
            uniqueArray.push(n)
        });

        console.log(uniqueArray);
    }
}

compararArrays([1, 2, 3, 4], [3, 4, 5, 6], false)