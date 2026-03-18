class user{
// Atributos Privados e Públicos
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password, active){
    this.#id = id
    this.#name = name
    this.#email = email
    this.#password = password
    this.#active = active
    }

    // Obter ID
    get id(){
        return this.#id;
    }

    // Obter Nome
    get name(){
        return this.#name
    }

    set id(value){
        this.#id += value;
    }

    set name(value){
        this.#name += value
    }

}

// Regra de Negócio
const normalUser = new user("067235", "Felip Ludwig", "felipe.ludwig@gmail.com", "Pipocavoadora", true)

normalUser.name = (" Felipexx78")
console.log(normalUser.name)
// console.log(normalUser.id)