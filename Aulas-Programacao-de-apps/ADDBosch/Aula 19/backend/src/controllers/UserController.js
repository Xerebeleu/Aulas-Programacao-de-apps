// const people = ["Ar", "Ney", "Ra", "He"]
import { connection } from "../database/db.js"

// export const getPeople = (req, res) => {
//     res.status(200).send(people)
// }

// export const createUser = (req, res) => {
//     const { name } = req.body

//     try {
//         people.push(name)
//         return res.status(200).send({ response: "Usuário registrado" }) 
//     } catch {
//         return res.status(500).send({ response: "Erro ao registrar usuário" })
//     }
// }

export const getPeople = (req, res) => {
    const users = connection.query("select * from user", (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu um erro10" })
        }

        return res.status(200).send(results)
    })
}

export const createUser = (req, res) => {
    const { name, email, password } = req.body

    try {
        const inserir = connection.query(
            "insert into user (name, email, password) values (?,?,?);",
            [name, email, password]
        )

        return res.status(201).send({ response: "Usuário registrado" })
    } catch {
        return res.status(500).send({ response: "Erro ao registrar usuário" })
    }
}

export const updateUser = (req, res) => {
    const { name, email, password } = req.body
    const { id } = req.params

    try {
        const atualizar = connection.query(
            "UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?",
            [name, email, password, id]
        )

        return res.status(200).send({ response: "Usuário atualizado com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao atualizar o usuário" })
    }
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    try {
        const deletar = connection.query(
            "DELETE FROM user WHERE id = ?",
            [id]
        )

        return res.status(200).send({ response: "Usuário deletado com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao deletar o usuário" })
    }
}

export const findUser = (req, res) => {
    const { id } = req.params

    try {
        const user = connection.query(
            'SELECT * FROM user WHERE id = ?',
            [id],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ error: "Erro ao buscar usuário" });
                }
                if (results.length === 0) {
                    return res.status(404).json({ error: "Usuário não encontrado" });
                }
                return res.json(results[0]);
            }
        )
    } catch {
        return res.status(500).send({ response: "Erro ao achar o usuário" })
    }
}