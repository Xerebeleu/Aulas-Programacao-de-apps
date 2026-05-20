import express, { response, Router } from 'express'
import { getPeople, createUser, updateUser, deleteUser, findUser } from '../controllers/PecaController.js';
import { validateCreatePeca, validateDeletePeca, validateGetPecaById, validateUpdatePeca} from '../middlewares/userMiddleware.js'; 

const router = express.Router();

router
    .put('/update/:id',validateUpdatePeca, updateUser)
    .get('/list', getPeople)
    .post('/create', validateCreatePeca, createUser)
    .delete("/delete/:id", validateDeletePeca, deleteUser)
    .get('/find/:id', validateGetPecaById, findUser)

export default router