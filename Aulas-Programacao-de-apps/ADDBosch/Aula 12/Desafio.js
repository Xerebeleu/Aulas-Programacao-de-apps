class user{
// Atributos Privados e Públicos
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password, active){
    
        if (!name || !email.includes("@") || password.lenght < 6){
            return console.error("Ocorreu um erro. Confira de novo os dados")
        }
    
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = true
        user.push({id, email, password, active: true})
    }

    // Obter ID
    get id (){
        return this.#id
    }

    // Obter Email
    get email(){
        return this.#email
    }
    set email(email){
        return !email.includes("@") ? console.error("Erro ao setar o email") : this.#email = email
    }

    // Obter Nome
    get name(){
        return this.#name
    }
    set name(name){
        return !name ? console.error("Erro ao setar o nome") : this.#name = name
    }

    // Obter Password
    set password(password){
        return this.#password.lenght < 6 ? console.error("Erro ao setar senha") : this.#password = password
    }
    verifypassword(password){
        return password !== this.#password ? false :  true
    }
    changeUserActivity(){
        return this.#active === true ? this.#active = false : this.#active = true
    }
    verifyUserActivity(){
        return this.#active == true ? true : false
    }
}

class Client extends User{
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

    showData(){
        return {
            id: this.getId(),
            name: this.getName(),
            email: this.getEmail(),
            active: this.verifyUserActivity()
        }
    }

    changeData(name, email, password){
        if(this.verifyPassword(password) == true){
            return console.error("Não é possível alterar a senha pela mesma")
        }
        else{
            this.setName(name)
            this.setEmail(email)
            this.setPassword(password)
        }
    }
}

class Admin extends User {
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

    showAllUsers(){
        return users
    }

}
