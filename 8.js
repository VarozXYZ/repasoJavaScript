/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

/* convertirAMilisegundos(dias, horas, minutos, segundos)
dias = 1, horas = 0, minutos = 0, segundos = 0
86400000 ms */

function convertirAMilisegundos(dias, horas, minutos, segundos) {
    horas += dias * 24;
    minutos += horas * 60;
    segundos += minutos * 60;
    return segundos * 1000;
}

console.log(convertirAMilisegundos(1, 0, 0, 0));