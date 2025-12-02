/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

/* comparar(str1, str2)
ejemplo de salida: 
out1: h
out2:

comparar("abcd", "bcef")
out1: ad
out2: ef

comparar("murciélago", "lagartija")
out1: murciéo
out2: rtj
*/ 

function comparar(inp1, inp2) {
    let out1 = inp1.split("").filter(l => !inp2.includes(l))
    let out2 = inp2.split("").filter(l => !inp1.includes(l));

    console.log(out1);
    console.log(out2);
}


comparar("abcd", "bcef")
comparar("murciélago", "lagartija")