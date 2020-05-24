const express = require('express');
const router = express.Router(); //interceptação das rotas
const clienteController = require('../controllers/cliente-controller');
const autorizacao = require('../services/auth-service')

router.post("/", clienteController.post);
router.get("/", autorizacao.authorize,  clienteController.getAll);
router.get("/:clienteId", clienteController.getById);
router.put("/:clienteId", clienteController.put)
router.delete('/:clienteId', clienteController.delete);



module.exports = router;