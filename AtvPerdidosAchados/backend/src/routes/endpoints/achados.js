import express, { Router } from 'express'
import {getObjetos, createObjeto, updateObjeto, deleteObjeto, findObjeto} from '../../controllers/controlPerdidos.js';
import {validateCreateObjeto} from '../../middleware/ObjetoMiddleware.js';

const router = express.Router();

router
    .get('/listar', getObjetos)
    .get('/listar/:id', findObjeto)
    .post('/registrar', validateCreateObjeto, createObjeto)
    .put('/atualizar/:id', updateObjeto)
    .delete('/remover/:id', deleteObjeto)

export default router

// C:\Users\Aluno\Downloads\AtvPerdidosAchados>cd backend
//C:\Users\Aluno\Downloads\AtvPerdidosAchados\backend>npm init -y
//C:\Users\Aluno\Downloads\AtvPerdidosAchados\backend>npm i cors dotenv express mysql2 nodemon
//.ENV (arquivo):
//HOST = localhost
//USER = root
//PASSWORD = root
//DATABASE = sistemaAchadosEPerdidos
//PORT = 3307