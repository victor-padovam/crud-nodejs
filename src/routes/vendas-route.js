const express = require('express');
const router = express.Router(); //interceptação das rotas
const vendaController = require('../controllers/vendas-controller');
const autorizacao = require('../services/auth-service')

router.post("/", vendaController.post);
router.get("/", autorizacao.authorize, vendaController.getAll);
router.get("/:vendaId", vendaController.getById);
router.put("/:vendaId", vendaController.put)
router.delete('/:vendaId', vendaController.delete);



module.exports = router;