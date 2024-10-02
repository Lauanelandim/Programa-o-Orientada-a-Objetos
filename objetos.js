function Carro(marca, modelo, ano, cor) {
this.marca = marca;
this.modelo = modelo;
this.ano = ano;
this.cor = cor;
this.ligar = function(){
    console.log("O carro está ligado.");
 };
}

//Criando uma nova instância de Carro
let meuCarro = new Carro("Volkswagen", "Gol", 2016, "preto");
console.log(meuCarro.marca); //Saída: Volkswagen
meuCarro.ligar();
console.log(meuCarro);