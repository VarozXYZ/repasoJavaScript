/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

/* capitalizarPalabras(texto)
texto = "hola mundo"
Salia: Hola Mundo */ 

function capitalizarPalabras(text) {
    let wordArray = text.split(" ");
    wordArray = wordArray.map(word => {
        let letters = word.split("");
        letters[0] = letters[0].toUpperCase();
        return letters.join("");
    });
    wordArray = wordArray.join(" ");
    return wordArray;
}

console.log(capitalizarPalabras("hola mundo"));