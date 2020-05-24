const express = require('express');
const router = express.Router(); //interceptação das rotas
const userController = require("../controllers/user-controller");


router.post("/login",  userController.login);
router.post("/",  userController.post);
//Get All
router.get("/",  userController.getAll);

//DELETE
router.delete("/:userId", userController.delete);

module.exports = router;
