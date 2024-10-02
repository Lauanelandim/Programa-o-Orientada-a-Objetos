/**
 * Fila (FIFO - First In, First Out): Primeiro elemento a entrar é o
primeiro a sair.
 */

let fila = [];
fila.push(1); //Adiciona 1 à fila
fila.push(2); //Adiciona 2 à fila
console.log(fila.shift()); //Remove e retorna 2 (ultimo elemento)