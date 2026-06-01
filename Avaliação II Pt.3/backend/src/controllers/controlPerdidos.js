import {response} from "express";
import connection from "../database/db.js";

export const listarFuncionarios = (req, res) => {
    const users = connection.query("select * from Prova", (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu um erro" })
        }

        return res.status(200).send(results)
    })
}



export const cadastrarFuncionario = (req, res) => {
    const {nome, sobrenome, setor, funcao} = req.body

    try {
        const inserir = connection.query(
            "insert into Prova (nome, sobrenome, setor, funcao) values (?,?,?,?);",
            [nome, sobrenome, setor, funcao]
        )

        return res.status(201).send({ response: "Funcionario registrada" })
    } catch {
        return res.status(500).send({ response: "Erro ao registrar Funcionario" })
    }
}



export const updateFuncionario = (req, res) => {
    const {nome, sobrenome, setor, funcao} = req.body
    const {id} = req.params

    try {
        const atualizar = connection.query(
            "UPDATE Prova SET nome = ?, sobrenome = ?, setor = ?, funcao = ?",
            [nome, sobrenome, setor, funcao, id]
        )
        return res.status(200).send({ response: "Funcionario atualizada com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao atualizar o funcionario" })
    }
}



export const deleteFuncionario = (req, res) => {
    const {id} = req.params

    try {
        const deletar = connection.query(
            "DELETE FROM prova WHERE id = ?",
            [id]
        )

        return res.status(200).send({ response: "Funcionario deletada com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao deletar o Funcionario" })
    }
}
