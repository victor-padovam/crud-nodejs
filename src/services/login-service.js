const User = require("../app/models/user");
const loginRepository = require('../repositories/login-repository')

//User-Post-Controller
exports.post = async (req, res) => {
    try {
        await loginPepository.post({
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao
        });
        res.status(201).send({
            message: "login realizado com sucesso"
        })
    } catch (error) {
        res.status(500).send({
            message: "Falha ao tentar login",
            erro: error
        });

    }
}