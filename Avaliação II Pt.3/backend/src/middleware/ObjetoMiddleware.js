export function validateCreateFuncionario(req, res, next) {
    const {nome, sobrenome, setor, funcao} = req.body

    if(!nome.trim()) {
        return res.status(400).send({
            error : "No code provided"
        })
    }

    if(!sobrenome.trim()) {
        return res.status(400).send({
            error : "No descricao provided"
        })
    }

    if(!setor.trim()) {
        return res.status(400).send({
            error : "No localEncontrado provided"
        })
    }

    if(!funcao.trim()) {
        return res.status(400).send({
            error : "No dataEncontrado provided"
        })
    }
    next()
}