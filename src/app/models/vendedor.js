var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vendedorSchema = new Schema({
    nome:{type:String, required : true},
    rg:Number,
    email:String,
});

module.exports = mongoose.model('Vendedor', vendedorSchema);
