class Automovel{

    modelo
    marca
    cor
    ano
    motor

    constructor(modelo, marca, cor, ano, motor){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.motor = motor
        this.ano = ano
    }

    //Metodo no objeto
    acelerar(){
        return `O veiculo ${this.marca} ${this.modelo} está acelerando`
    }

    frear(){
        return`O veiculo ${this.marca} ${this.modelo} está freando`
    }

    esterçar(lado){
        return `O veiculo ${this.marca} ${this.modelo} está virando para a ${lado}`
    }

}

const veiculo1 = new Automovel("Fiesta", "Ford", "Branco", 2015, "1.5L")
console.log(veiculo1.acelerar())

const veiculo2 = new Automovel("Astra", "Chevrolet", "Preto fosco", 1999, "2.0L")
console.log(veiculo2.acelerar())

class Pessoa{

    nome
    cor_de_pele
    altura
    peso
    membros
    consciencia


    constructor(nome, cor_de_pele, altura, peso, membros,consciencia){
        this.nome = nome
        this.cor_de_pele = cor_de_pele
        this.altura = altura
        this.peso = peso
        this.membros = membros
        this.consciencia = consciencia
    
    }
     //Metodo no objeto
    movimento(){
        return `A pessoa de nome ${this.nome} com ${this.altura} metros e ${this.peso}Kg, está movimentando`
    }
    comer(){
        return `A pessoa de nome ${this.nome} pesando ${this.peso} Kg esta se alimentando`
    }
    hidratando(){
        return `A pessoa de nome ${this.nome} pesando ${this.peso} Kg esta se hidratando`
    }
}

const pessoa1 = new Pessoa("Felipe", "Moreno", 1.71, 74, "Todos", "sim")
console.log(pessoa1.movimento())

const pessoa2 = new Pessoa("Felipexx78", "Moreno", 1.80, 80, "Joelho faltando", "não")
console.log(pessoa2.comer())