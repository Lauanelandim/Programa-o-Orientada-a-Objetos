/**
 * é um processo fundamental em qualquer sistema de software, que
consiste na identificação, correção e prevenção de erros que possam
ocorrer durante a execução de um programa.
O tratamento de erros em JavaScript é feito com as instruções
try, catch, finally e throw. Essas instruções ajudam a gerenciar
erros que possam ocorrer durante a execução de um programa,
permitindo que sejam tratados de maneira controlada.
 */

function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não permitida.");
        }
        return a / b;
    } catch (erro) {
        console.log("Erro: " + erro.message);
    } finally {
        console.log("Operação finalizada.");
    }
}

console.log(dividir(10, 2)); // Saida: 5, operação finalizada.
console.log(dividir(10, 0)); // Saida: erro: divisão por zero não permitida