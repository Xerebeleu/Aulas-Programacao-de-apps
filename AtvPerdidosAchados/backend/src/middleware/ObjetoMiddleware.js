export function validateCreateObjeto(req, res, next) {
    const {objeto, descricao, localEncontrado, dataEncontrado, statusObjeto} = req.body

    if(!objeto.trim()) {
        return res.status(400).send({
            error : "No code provided"
        })
    }

    if(!descricao.trim()) {
        return res.status(400).send({
            error : "No descricao provided"
        })
    }

    if(!localEncontrado.trim()) {
        return res.status(400).send({
            error : "No localEncontrado provided"
        })
    }

    if(!dataEncontrado.trim()) {
        return res.status(400).send({
            error : "No dataEncontrado provided"
        })
    }

    const [ano, mes, dia] = dataEncontrado.split('-').map(Number);

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth() + 1; 
    const diaAtual = hoje.getDate();
    const dataInformada = new Date(ano, mes - 1, dia);
    const dataHoje = new Date(anoAtual, mesAtual - 1, diaAtual);

    if (dataInformada > dataHoje) {
        return res.status(400).send({
            error: "The dataEncontrado cannot be a future date"
        });
    }
    
    if(!statusObjeto.trim()) {
        return res.status(400).send({
            error : "No statusObjeto provided"
        })
    }

    next()
}
