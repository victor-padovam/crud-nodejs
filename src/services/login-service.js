const User = require("../app/models/user");
//User-Post-Controller
exports.post = async (req, res) => {
    try {
        await loginPepository.post({
            email: req.body.email,
            password: req.body.password,
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