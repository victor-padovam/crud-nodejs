var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nome:{type:String, required : true},
    rg:Number,
    email:{type:String, required : true}

});

module.exports = mongoose.model('Cliente', clienteSchema);