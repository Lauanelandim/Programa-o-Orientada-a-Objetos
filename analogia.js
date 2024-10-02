/**
 * Pense em pares chave-valor como campos de um formulário:
Chave: O nome do campo do formulário (por exemplo, Nome,
Idade).
Valor: A informação que você preenche para cada campo (por
exemplo, Ana, 30).
Ou imagine um dicionário:
A chave seria a palavra.
O valor seria a definição dessa palavra.
 */

//Objeto com pares chave-valor
let pessoa = {
    nome: "João", // Chave: 'nome', valor: "João"
    idade: 25, // Chave: 'idade', Valor: 25
    cidade: "São Paulo" // Chave: 'cidade', valor: "São Paulo"
};

//Acessando os valores usando as chaves
console.log(pessoa.nome); //Saida: João
console,log(pessoa["idade"]); // Saida 25

