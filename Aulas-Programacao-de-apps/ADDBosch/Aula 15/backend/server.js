const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "aula_add",
    port: 3307
})

app.get("/usuario", (req, res) => {
    connection.query("SELECT * FROM usuario", (err, result) => {
        if(err){
            return
        }
        res.status(200).send({ usuarios: result })
    })
})

app.get("/usuario/:id", (req, res) =>{
    const { id } = req.params
    connection.query("SELECT * FROM usuario WHERE id = ?", [id], (err, results) =>{
        if(err){
            return
        }       
        return res.status(200).send(results[0]) 
    })
})

app.post("/registro", (req, res) => {
    const {nome, email, senha} = req.body
    connection.query("INSERT INTO usuario (nome, email, senha) VALUES (?,?,?)", [nome, email, senha]) 
    return res.status(201).send({ response: "Usuário Registrado com sucesso!" })
})

if(connection){
    console.log("Banco de dados conectado!")
}

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})