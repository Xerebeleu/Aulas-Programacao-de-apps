import express, { Router } from 'express'
import {listarFuncionarios, cadastrarFuncionario, updateFuncionario, deleteFuncionario} from '../../controllers/controlPerdidos.js';
import {validateCreateFuncionario} from '../../middleware/ObjetoMiddleware.js';

const router = express.Router();

router
    .get('/listar', listarFuncionarios)
    .post('/cadastro', validateCreateFuncionario, cadastrarFuncionario)
    .put('/atualizar/:id', updateFuncionario)
    .delete('/remover/:id', deleteFuncionario)

export default router


