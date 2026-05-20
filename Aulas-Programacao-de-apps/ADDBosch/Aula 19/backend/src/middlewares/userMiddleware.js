import { connection } from "../database/db.js"
export async function validateCreatePeca(req, res, next) {
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque } = req.body;

    if (!nome_peca || typeof nome_peca !== "string" || nome_peca.trim().length < 3) {
        return res.status(400).json({ erro: "O 'nome_peca' é obrigatório e deve ter no mínimo 3 caracteres." });
    }
    if (!codigo_peca) {
        return res.status(400).json({ erro: "O 'codigo_peca' é obrigatório." });
    }
    if (!fornecedor) {
        return res.status(400).json({ erro: "O 'fornecedor' é obrigatório." });
    }
    if (quantidade === undefined || typeof quantidade !== "Number"|| quantidade < 0) {
        return res.status(400).json({ erro: "O 'quantidade' deve ser um número maior ou igual a 0." });
    }
    if (preco_unitario === undefined || typeof preco_unitario !== "Number" || preco_unitario <= 0) {
        return res.status(400).json({ erro: "O 'preco_unitario' deve ser um número maior que 0." });
    }
    if (estoque === undefined || typeof estoque !== "Number"|| estoque < 0) {
        return res.status(400).json({ erro: "O 'estoque' deve ser um número maior ou igual a 0." });
    }
    next();
}


export function validateGetPecaById(req, res, next){
    const {id} = req.body
    if(!id){
        return res.status.send({response: "Revise o 'Id'"})
    }
    if (id === undefined || typeof id !== "Number") {
        return res.status(400).json({ erro: "O 'Id' deve ser númerico." });
    }
    next();
}


export async function validateUpdatePeca(req, res, next) {
    const { id, quantidade, preco_unitario, estoque } = req.body;

    if(!id){
        return res.status.send({response: "Revise o 'Id'"})
    }
    if (id === undefined || typeof id !== "Number") {
        return res.status(400).json({ erro: "O 'Id' deve ser númerico." });
    }
    if (quantidade === undefined || typeof quantidade !== "Number"|| quantidade < 0) {
        return res.status(400).json({ erro: "O 'quantidade' deve ser um número maior ou igual a 0." });
    }
    if (preco_unitario === undefined || typeof preco_unitario !== "Number" || preco_unitario <= 0) {
        return res.status(400).json({ erro: "O 'preco_unitario' deve ser um número maior que 0." });
    }
    if (estoque === undefined || typeof estoque !== "Number"|| estoque < 0) {
        return res.status(400).json({ erro: "O 'estoque' deve ser um número maior ou igual a 0." });
    }
    next();
}

export function validateDeletePeca(req, res, next){
    const {id} = req.body
    if(!id){
        return res.status.send({response: "Revise o 'Id'"})
    }
    if (id === undefined || typeof id !== "Number") {
        return res.status(400).json({ erro: "O 'Id' deve ser númerico." });
    }
    next();
}
