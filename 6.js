/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

/* num = 153
num = 123 */ 

function amstrong(n) {
    let original = n.toString().split("");
    let amstrong = 0;
    original.forEach(num => {
        amstrong += parseInt(num) ** original.length;
    });
    if (n == amstrong) {
        console.log("El número es Amstrong");
        return true;
    } else {
        console.log("El número no es Amstrong");
        return false;
    }
}

amstrong(153)