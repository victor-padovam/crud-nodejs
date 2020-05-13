const Vendedor = require('../app/models/vendedor')
const mongoose = require('mongoose')

//GetAll - repository
exports.get = async () => {
    const res = await Vendedor.find();
    return res;
}

//GetById - repository
exports.getById = async(id) =>{
    const res = await Vendedor.findById(id);
    return res;
}

//Post - repository
exports.post = async(data) =>{
    const vendedor = new Vendedor(data);
    await vendedor.save();
} 

//Put - repository
exports.put = async(id, data) =>{
    await Vendedor.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            rg: data.rg,
            email:data.email,
            totalVendas:data.totalVendas
        }
    });
}

//Delete - repositpory
exports.delete = async(id) =>{
    await Vendedor.findOneAndRemove(id);
}