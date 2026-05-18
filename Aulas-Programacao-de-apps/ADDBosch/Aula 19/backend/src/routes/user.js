import express, { response, Router } from 'express'
import { getPeople, createUser, updateUser, deleteUser, findUser } from '../controllers/UserController.js';

const router = express.Router();
const users = ['Gui', 'Ar', "He", 'Ra']

router

    .put('/update/:id', updateUser)
    .get('/users', getPeople)
    .post('/users', createUser)
    .delete("/delete/:id", deleteUser)
    .get('/find/:id', findUser)

export default router