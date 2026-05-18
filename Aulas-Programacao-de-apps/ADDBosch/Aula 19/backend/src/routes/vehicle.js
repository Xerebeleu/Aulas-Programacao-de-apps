import express, { response, Router } from 'express'
import { VehicleController } from '../controllers/VehicleController.js';

const router = express.Router();

router
    .get('/list', VehicleController.getCars)
    .post('/vehicles', VehicleController.getCars)

export default router