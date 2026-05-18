import express, { response, Router } from 'express'
import { PedidoController } from '../controllers/PedidoController.js';

const router = express.Router();

router
    .get('/pedido/:id', PedidoController.getPedido)
    .get('/list', PedidoController.getPedidos)
    .post('/create', PedidoController.createPedido)
    .put('/update/:id', PedidoController.updatePedido)

export default router