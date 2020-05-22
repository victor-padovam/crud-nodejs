const Vendas = require("../app/models/vendas");
const repository = require('../repositories/vendas-controller');


//Post-Controller
exports.post = async (req, res) => {
    try {
        await repository.post({
            numero: req.body.numero,
            vendedor: req.body.vendedor,
            produto: req.body.produto,
        });
        res.render(
            'lista-vendas'
        );
    } catch (error) {
        res.status(500).send({
            message: "Falha ao inserir um produto",
            erro: error
        });

    }
}

//Get All
exports.getAll = async (req, res) => {
    try {
        var data = await repository.get();
        res.status(200).send({
            qtde:data.length,
            dados: data
        });
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

//GetById - controller
exports.getById = async (req, res) => {
    try {
        const id = req.params.vendaId;
        var data = await repository.getById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

//PUT - controller
exports.put = async (req, res) => {
    try {
        const id = req.params.vendaId;    
        const data = await repository.put(id, req.body);
        res.status(200).send({
            message:"atualizado com sucesso",
            dados: data
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
}

//DELETE - controller
exports.delete = async (req, res) =>{
    try {
        const id = req.params.vendaId;  
        await repository.delete(id);
        res.status(200).send({
            message:"removido com sucesso",
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
    
}
