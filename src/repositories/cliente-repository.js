const Cliente = require('../app/models/cliente');
const mongoose = require('mongoose');

//GetAll - repository
exports.get = async () => {
    const res = await Cliente.find();
    return res;
}

//GetById - repository
exports.getById = async(id) =>{
    const res = await Cliente.findById(id);
    return res;
}

//Post - repository
exports.post = async(data) =>{
    const cliente = new Cliente(data);
    await cliente.save();
} 

//Put - repository
exports.put = async(id, data) =>{
    await Cliente.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            rg: data.rg,
            email:data.email
        }
    });
}

//Delete - repositpory
exports.delete = async(id) =>{
    await Cliente.findOneAndRemove(id);
}