const express = require('express')
var router = express.Router(); //interceptação das rotas
const userController = require('../controllers/user-controller')


//Get All
router.get("/", userController.getAll);

//DELETE
router.delete("/:userId", userController.delete);

module.exports = router;