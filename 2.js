/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function textInverter(text) {
    const letters = text.split("");
    let invertedText = "";

    for (let i = letters.length - 1; i >= 0; i--) {
        invertedText += letters[i];
    }
    return invertedText;
}

console.log(textInverter("Hola Mundo"));