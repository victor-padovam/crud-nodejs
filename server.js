var express = require ('express');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const Vendedor = require("./src/app/models/vendedor");


//PERSISTÊNCIA
mongoose.connect('mongodb+srv://victorpadovan1997:majority@trabalhonavarro-1q870.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology: true }
);

//Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var urlencodeParser = bodyParser.urlencoded({ extended: false});

//Definindo a porta via arquivo de configuração
const port = process.env.port || 3000;

//ROTAS
const indexRoute = require('./src/routes/index-routes');
const productRoute = require('./src/routes/product-routes');
const signupRoute = require('./src/routes/signup-route');
const loginRoute = require('./src/routes/login-route');
const userRoute = require('./src/routes/user-routes');
const vendedorRoute = require('./src/routes/vendedor-route');
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
app.use('/api/vendedor', vendedorRoute);


app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Cadastro de Vendedor requisições API
app.get('/cadastroVendedor', function(req, res){
    res.render('form-vendedor');
});

app.get('/lista-vendedor', function(req, res){
  /*  Vendedor.find().then((vendedores) => {
        res.render("lista-vendedor", {vendedores: vendedores.map(vendedor => vendedor.toJSON())})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar");
        res.redirect("/");
    })
    */
    res.render('lista-vendedor');
});

app.get('/editar-vendedor/:id', (req, res) => {
  Vendedor.findById(req.params.id).sort({date:'desc'}).lean().then((vendedor) => {

    res.render('editar-vendedor',{vendedor:vendedor});

    }).catch((err) => {
        req.flash('error_msg',"Houve um erro ao listar as categorias"+err);
        res.redirect('http://localhost:8080/admin');

    });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });


//Cadastro de Produto requisições API
app.get('/cadastroProdutos', function(req, res){
    res.render('form-produtos.handlebars');
});

//Cadastro de Clientes requisições API
app.get('/cadastroClientes', function(req, res){
    res.render('form-cliente');
});

app.listen(port, () => {
    console.log('Server OK');
});

app.get('/', function(req, res){
    res.render('dashboard');
});