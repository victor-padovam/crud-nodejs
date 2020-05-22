var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vendasSchema = new Schema({
    numero:{type:Number, required : true},
    vendedor:{type: String},
    produto:{type: String},
})

module.exports = mongoose.model('Vendas', vendasSchema);