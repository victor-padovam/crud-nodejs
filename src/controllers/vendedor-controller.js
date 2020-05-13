const Produto = require("../app/models/product");

const repository = require('../repositories/vendedor-repository')

//Post-Controller
exports.post = async (req, res) => {

    try {
        await repository.post({
            nome: req.body.nome,
            rg: req.body.rg,
            email: req.body.email,
            totalVendas: req.body.totalVendas
        });
        res.status(201).send({
            message: "Vendedor inserido com sucesso"
        })
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
        const id = req.params.productId;
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
        const id = req.params.productId;    
        const data = await repository.put(id, req.body);
        res.status(200).send({
            message:"Vendedor atualizado com sucesso",
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
        const id = req.params.productId;  
        await repository.delete(id);
        res.status(200).send({
            message:"Vendedor removido com sucesso",
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
    
}

