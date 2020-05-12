const Produto = require("../app/models/product");

const repository = require('../repositories/product-repository')

//Post-Controller
exports.post = async (req, res) => {

    try {
        await repository.post({
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao
        });
        res.status(201).send({
            message: "Produto inserido com sucesso"
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
            message:"Produto atualizado com sucesso",
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
            message:"Produto removido com sucesso",
        })
    } catch (error) {
         res.status(500).send({
            message: "Falha na requisição",
            erro: error
        });
    }
    
}

