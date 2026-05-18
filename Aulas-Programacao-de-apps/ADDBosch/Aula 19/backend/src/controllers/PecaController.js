import { connection } from "../database/db.js"

export const getPeople = (req, res) => {
    const users = connection.query("select * from pecas", (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu um erro" })
        }

        return res.status(200).send(results)
    })
}

export const createUser = (req, res) => {
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque } = req.body

    try {
        const inserir = connection.query(
            "insert into pecas (nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque) values (?,?,?,?,?,?);",
            [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque]
        )

        return res.status(201).send({ response: "Peça registrada" })
    } catch {
        return res.status(500).send({ response: "Erro ao registrar peça" })
    }
}

export const updateUser = (req, res) => {
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque } = req.body
    const { id } = req.params

    try {
        const atualizar = connection.query(
            "UPDATE pecas SET nome_peca = ?, codigo_peca = ?, fornecedor = ?, quantidade = ?, preco_unitario = ?, estoque = ? WHERE id = ?",
            [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque, id]
        )

        return res.status(200).send({ response: "Peça atualizada com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao atualizar o peça" })
    }
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    try {
        const deletar = connection.query(
            "DELETE FROM pecas WHERE id = ?",
            [id]
        )

        return res.status(200).send({ response: "Peça deletada com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao deletar a peça" })
    }
}

export const findUser = (req, res) => {
    const { id } = req.params

    try {
        const user = connection.query(
            'SELECT * FROM pecas WHERE id = ?',
            [id],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ error: "Erro ao buscar peça" });
                }
                if (results.length === 0) {
                    return res.status(404).json({ error: "Peça não encontrado" });
                }
                return res.json(results[0]);
            }
        )
    } catch {
        return res.status(500).send({ response: "Erro ao achar a peça" })
    }
}