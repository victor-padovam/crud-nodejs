const express = require('express');
const router = express.Router(); //interceptação das rotas
//const Produto = require("../app/models/product");
const productController = require('../controllers/product-controller');
const autorizacao = require('../services/auth-service')

router.post("/", productController.post);
router.get("/", /*autorizacao.authorize,*/  productController.getAll);
router.get("/:productId", productController.getById);
router.put("/:productId", productController.put)
router.delete('/:productId', productController.delete);



module.exports = router;