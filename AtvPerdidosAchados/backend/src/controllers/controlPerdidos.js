import {response} from "express";
import connection from "../database/db.js";

export const getObjetos = (req, res) => {
    const users = connection.query("select * from Objeto", (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu um erro" })
        }

        return res.status(200).send(results)
    })
}



export const createObjeto = (req, res) => {
    const {objeto, descricao, localEncontrado, dataEncontrado, statusObjeto} = req.body

    try {
        const inserir = connection.query(
            "insert into Objeto (objeto, descricao, localEncontrado, dataEncontrado, statusObjeto) values (?,?,?,?,?);",
            [objeto, descricao, localEncontrado, dataEncontrado, statusObjeto]
        )

        return res.status(201).send({ response: "Objeto registrada" })
    } catch {
        return res.status(500).send({ response: "Erro ao registrar Objeto" })
    }
}



export const updateObjeto = (req, res) => {
    const {objeto, descricao, localEncontrado, dataEncontrado, statusObjeto} = req.body
    const {id} = req.params

    try {
        const atualizar = connection.query(
            "UPDATE Objeto SET objeto = ?, descricao = ?, localEncontrado = ?, dataEncontrado = ?, statusObjeto = ? WHERE id = ?",
            [objeto, descricao, localEncontrado, dataEncontrado, statusObjeto, id]
        )
        return res.status(200).send({ response: "Objeto atualizada com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao atualizar o Objeto" })
    }
}



export const deleteObjeto = (req, res) => {
    const {id} = req.params

    try {
        const deletar = connection.query(
            "DELETE FROM pecas WHERE id = ?",
            [id]
        )

        return res.status(200).send({ response: "Objeto deletada com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao deletar o Objeto" })
    }
}




export const findObjeto = (req, res) => {
    const { id } = req.params

    try {
        const user = connection.query(
            'SELECT * FROM Objeto WHERE id = ?',
            [id],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ error: "Erro ao buscar Objeto" });
                }
                if (results.length === 0) {
                    return res.status(404).json({ error: "Objeto não encontrado" });
                }
                return res.json(results[0]);
            }
        )
    } catch {
        return res.status(500).send({ response: "Erro ao achar o Objeto" })
    }
}