const Produto = require('../app/models/product')
const mongoose = require('mongoose')

//GetAll - repository
exports.get = async () => {
    const res = await Produto.find();
    return res;
}

//GetById - repository
exports.getById = async(id) =>{
    const res = await Produto.findById(id);
    return res;
}

//Post - repository
exports.post = async(data) =>{
    const product = new Produto(data);
    await product.save();
} 

//Put - repository
exports.put = async(id, data) =>{
    await Produto.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            preco: data.preco,
            descricao:data.descricao
        }
    });
}

//Delete - repositpory
exports.delete = async(id) =>{
    await Produto.findOneAndRemove(id);
}