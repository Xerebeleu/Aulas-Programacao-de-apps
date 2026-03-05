// const pessoa = require("./data.json")

// const pessoa = pessoa.filter ((p) => p.salary == 3500)
// const pais = pessoa.map ((p) => {return {p}})

const fetchData = async () => {
    const people = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await people.json()
    console.log(data)
}

fetchData();