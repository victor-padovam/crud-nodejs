var express = require ('express');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

//PERSISTÊNCIA
mongoose.connect('mongodb+srv://fabio:fabio123@cluster0-waiml.mongodb.net/bd-teste?retryWrites=true&w=majority', 
{useNewUrlParser:true, useUnifiedTopology: true }
);

//Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta via arquivo de configuração
const port = process.env.port || 3000;

//ROTAS
const indexRoute = require('./src/routes/index-routes');
const productRoute = require('./src/routes/product-routes');
const signupRoute = require('./src/routes/signup-route');
const loginRoute = require('./src/routes/login-route')

//Vincular a aplicacao (app) com o motor de rotas
//Rota geral (teste)
app.use('/api', indexRoute);
//Rotas para produtos
app.use('/api/products', productRoute);
//Rota para registro
app.use('/api/register', signupRoute);
//Rota para login
app.use('/api/login', loginRoute);

app.listen(port, () => {
    console.log('Server OK');
});

