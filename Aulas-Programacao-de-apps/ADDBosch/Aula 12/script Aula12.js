class Conta{
    #senha
    #agencia
    #nConta
    #titular
    #saldo

    constructor(senha, agencia, nConta, titular, saldo){
        this.#senha = senha
        this.#agencia = agencia
        this.#nConta = nConta
        this.#titular = titular
        this.#saldo = saldo
    }
    // get titular(){
    //     return this.#titular;
    // }
    // set titular(value){
    //     this.#titular += value;
    // }

    get saldo(){
        return this.#saldo;
    }
    set saldo(value){
        this.#saldo += value;
    }

    depositar(nConta, agencia, valor){
        if (nConta == this.#nConta && agencia == this.#agencia){
            return valor > 0 ? this.#saldo += valor : console.error("Valor deve ser positivo")
        }
        else{
            return console.error("Não foi possível executar a operação")
        }
    }

}

const c1 = new Conta("1234", "111", "40028922", "Felipe", 2000)
c1.depositar("40028922", "111", 50)

console.log(c1.saldo)
c1.titular


// try{
//     c1.depositar("40028922", "111", 50)
// }
// catch(e){
//     console.log(e)
// }

// console.log(c1.saldo)