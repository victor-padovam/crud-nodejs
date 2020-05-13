const express = require('express');
const router = express.Router(); //interceptação das rotas
const vendedorController = require('../controllers/vendedor-controller');
const autorizacao = require('../services/auth-service')

router.post("/", vendedorController.post);
router.get("/", /*autorizacao.authorize,*/  vendedorController.getAll);
router.get("/:vendedorId", vendedorController.getById);
router.put("/:vendedorId", vendedorController.put)
router.delete('/:vendedorId', vendedorController.delete);

module.exports = router;