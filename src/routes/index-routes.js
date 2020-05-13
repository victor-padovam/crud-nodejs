const express = require('express')
var router = express.Router(); //interceptação das rotas
const autorizacao = require('../services/auth-service');

router.use(function (req, res, next){
    //Aqui implementaremos rotinas de LOGs, Validações, Autenticações...
    console.log("Interceptação pelo Middleware");
    next();
});


router.get('/', (req, res) => res.json({message:'Rota teste OK'}));

module.exports = router;