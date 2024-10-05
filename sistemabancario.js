class ContaBancaria {
    constructor(titular, saldoIncial) {
        this.titular = titular;
        this._saldo = saldoIncial;
    }    
    
    verSaldo() {
        console.log(`Saldo atual de ${this.titular}: R$ ${this._saldo.toFixed(2)}`);
    }
    depositar(valor){
        if(valor <= 0){
            console.log(`O valor do depósito deve ser positivo`);
            return;
        }
        this._saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso`);
    }
    sacar(valor) {
        if(valor <=0){
            console.log(`O valor o saque deve ser positivo`);
            return;
        }
        if(valor > this._saldo){
            console.log(`Saldo insuficiente para saque`);
            return
        }
        this._saldo -= valor;
        console.log(`Saldo atualizado ${this._saldo.toFixed()}`);
    }
}

let minhaConta = new ContaBancaria("Sttefany", 3000);

minhaConta.verSaldo();
minhaConta.depositar(500);
minhaConta.verSaldo();
minhaConta.sacar(200);

