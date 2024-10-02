// Crianda um objet 'caminhao'
let caminhao = {
    marca: "Volkswagen", //Prpridade: chave é 'marca', valor é "volkswagem"
    modelo: "Constellation", //Propriedade: chave é 'modelo', valo é "constellation"
    ano: 2024, //Prpridade: chave é 'ano', valor é "2024"
    cor: "prata", //Prpridade: chave é 'cor', valor é "prata"

    //Método: define uma função associada ao objeto
    ligar: function() {
        console.log("O caminhão está ligado.");
    }
}

// Acessando propriedades do objeto
console.log(caminhao.marca); // saída volkswagem
console.log(caminhao["ano"]); //saída 2024

//Chamado o metodo do objeto
caminhao.ligar(); // saída: O caminhao está ligado.