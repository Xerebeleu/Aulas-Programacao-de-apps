class Veiculo {

    #id
    #modelo
    #marca
    #preco
    #disponivel
    
    constructor(id, marca, modelo, preco){
        if (marca.length < 2 || modelo.length < 2) throw new Error("Modelo e Marca Inválidos!");
        if (preco <= 0) throw new Error ("Preço precisa ser maior que zero!");
        
        this.#modelo = modelo
        this.#marca = marca
        this.#preco = preco
        this.#disponivel = true
        this.#id = id
    }

getId() {return this.#id;}
getMarcaModelo() {return `${this.#marca} ${this.#modelo}`;}
getPreco() {return  this.#preco;}
getDisponivel() {return this.#disponivel;}

    getPreco(novoPreco){
        if (this.#disponivel){
            console.log("Não é possivel realizar alterações nesse veículo.. pois ele está vendido")
            return;
        }
        if(novoPreco > 0){
            this.#preco = novoPreco;
            console.log(`Preço atualizado para: R$ ${this.#preco}`);
        } 
        else {
            console.log("ERRO!, PREÇO INVÁLIDO");
        }
    }

    vender(){
        if(this.#disponivel){
            this.#disponivel = false;
            console.log(`Venda Feita: R$ ${this.getMarcaModelo()}`);
        }
        else{
            console.log("ERRO!, VEÍCULO VENDIDO!");
        }
    }

    retornarAoEstoque(){
        this.#disponivel = true;
        console.log("Veículo retornou ao estoque");
    }

    exibicaoDados(){
        console.log(`Id: ${this.#id}, Carro: ${this.getMarcaModelo}, Preço: ${this.getPreco}, Disponibilidade: ${this.#disponivel}`);
    }
}

class Carro extends Veiculo{
    #portas;
    constructor(id, marca, modelo, preco, portas){
        super(id, marca, modelo, preco)
        if (portas <= 0)throw new Error("Número de portas = 0");
        this.#portas = portas
    }
}

class Moto extends Veiculo{
    #cilindradas;
    constructor(id, marca, modelo, preco, cilindradas){
        super(id, marca, modelo, preco);
        if (cilindradas < 50 || cilindradas > 2000) throw new Error("Cilindro esta fora do intervalo de (50-2000)");
        this.#cilindradas = cilindradas        
    }
}

const carro = new Carro(1, "Renault", "Kwid", 50000, 4);
const moto = new Moto(2, "BMW", "S1000R", 120000, 1000);

carro.exibicaoDados()