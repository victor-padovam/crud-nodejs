const userRepository = require('../repositories/user-repository')

exports.login = async (req, res) => {
    try {
        const result = await userRepository.login(req.body.email, req.body.password);
        res.status(200).send({ auth: true, token: result });
    } catch (e) {
        if (!e.status) {
            res.status(500).json({ error: { code: 'UNKNOWN_ERROR', message: 'An unknown error occurred.' } });
        } else {
            res.status(e.status).json({ error: { code: e.code, message: e.message } });
        }
    }
}

exports.userRegister = async function (req, res) {
    try {
        await userRepository.register(req.body.email, req.body.password);
        res.status(201).json({ "message": "usuário registrado com sucesso" });
    }
    catch (e) {
        if (!e.status) {
            res.status(500).json({ error: { code: 'UNKNOWN_ERROR', message: 'An unknown error occurred.' } });
        } else {
            res.status(e.status).json({ error: { code: e.code, message: e.message } });
        }
    }
}


exports.post = async (req, res) => {
    try {
        await userRepository.post({
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).send({
            message: 'User cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getAll = async (req, res) => {
    console.log(req);
     try {
        var data = await userRepository.get();
            console.log(data);

        res.status(200).send({
            message: "Retorno de User e Quantidade",
            data: data
        });

    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.userId;
        await Userrepository.delete(id)
        res.status(200).send({
            message: 'removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};