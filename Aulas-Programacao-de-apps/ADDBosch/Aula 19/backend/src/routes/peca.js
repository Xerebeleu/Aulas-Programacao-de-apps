import express, { response, Router } from 'express'
import { getPeople, createUser, updateUser, deleteUser, findUser } from '../controllers/PecaController.js';

const router = express.Router();

router
    .put('/update/:id', updateUser)
    .get('/list', getPeople)
    .post('/create', createUser)
    .delete("/delete/:id", deleteUser)
    .get('/find/:id', findUser)

export default router