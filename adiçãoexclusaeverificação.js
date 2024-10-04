/**
 * Em JavaScript, você pode adicionar, excluir e verificar propriedades
de um objeto dinamicamente.
 */

//Definindo o objeto 'carro'
let carro = {
    fabricante: 'Volkswagen',
    modelo: 'Gol',
    ano: 2018,
    cor: 'Vermelho',
    quilometragem: 0,

    // Métod para dirigir o carro e aumentar a quilometragem
    dirigir: function(distancia) {
        this.quilometragem += distancia;
    },

    //Metodo para exibir as informações do carro
    exibirInformacoes: function() {
    console.log(`Carro: ${this.fabricante}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Quilometragem: ${this.quilometragem}, km`)
    },

    //Método para alterar a cor do carro
    pintarCarro: function(novaCor) {
        this.cor = novaCor
    }
    
};

//testanto objeto 'carro'
carro.dirigir(50); // Aumenta a quilometragem em 50 km
carro.exibirInformacoes(); //Exibe: Carro: Volkswagen Gol, Ano,: 2018, Cor: Vermelho, quilometragem: 50 km

carro.pintarCarro('Azul'); //Muda a cor do carro para azul
carro.exibirInformacoes(); //Exibe: Carro: Volkswagen Gol. Ano 2018, Cor: azul, quilometragem: 50 km 