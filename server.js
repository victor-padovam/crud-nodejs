var express = require ('express');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

//PERSISTÊNCIA
mongoose.connect('mongodb+srv://victorpadovan1997:majority@trabalhonavarro-1q870.mongodb.net/test?retryWrites=true&w=majority',
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
const loginRoute = require('./src/routes/login-route');
const userRoute = require('./src/routes/user-routes');

//Vincular a aplicacao (app) com o motor de rotas
//Rota geral (teste)
app.use('/api', indexRoute);
//Rotas para produtos
app.use('/api/products', productRoute);
//Rota para registro
app.use('/api/register', signupRoute);
//Rota para login
app.use('/api/login', loginRoute);
app.use('/api/user', userRoute);


app.listen(port, () => {
    console.log('Server OK');
});

