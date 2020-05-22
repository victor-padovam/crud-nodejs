const Vendas = require('../app/models/vendas');
const mongoose = require('mongoose');

//GetAll - repository
exports.get = async () => {
    const res = await Vendas.find();
    return res;
}

//GetById - repository
exports.getById = async(id) =>{
    const res = await Vendas.findById(id);
    return res;
}

//Post - repository
exports.post = async(data) =>{
    const vendas = new Vendas(data);
    await vendas.save();
} 

//Put - repository
exports.put = async(id, data) =>{
    await Vendas.findByIdAndUpdate(id, {
        $set:{
            numero: data.numero,
            produto: data.produto,
            vendedor:data.vendedor
        }
    });
}

//Delete - repositpory
exports.delete = async(id) =>{
    await Vendas.findOneAndRemove(id);
}