var express = require ('express');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');
const handlebars = require('express-handlebars');
const Vendedor = require("./src/app/models/vendedor");
const Produto = require("./src/app/models/product");
const Cliente = require("./src/app/models/cliente");
const Vendas = require("./src/app/models/vendas");

const path = require('path');
app.use(express.static("assets"));

//SOCKET
app.get('/atendimento', function(req, res){
    res.render('atendimento');
});



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
const clienteRoute = require('./src/routes/cliente-route');
const vendaRoute = require('./src/routes/vendas-route');

app.use('/api', indexRoute);
app.use('/api/products', productRoute);
app.use('/api/register', signupRoute);
app.use('/api/login', loginRoute);
app.use('/api/user', userRoute);
app.use('/api/vendedor', vendedorRoute);
app.use('/api/cliente', clienteRoute);
app.use('/api/vendas', vendaRoute);
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//LISTAS
app.get('/cadastroVendedor', function(req, res){
    res.render('form-vendedor');
});

app.get('/login', function(req, res){
    res.render('login');
});


app.get('/vendas-lista', function(req, res){
    res.render('lista-vendas');
});

app.get('/lista-cliente', function(req, res){
    res.render('lista-cliente');
});

app.get('/dashboard', (req, res) => {
    res.render('graficos');
});

app.get('/lista-produto', (req, res) => {
    res.render('lista-produtos');
});

app.get('/lista-vendedor', (req, res) => {
    res.render('lista-vendedor');
});

app.get('/CadastroProduto', function(req, res){
    res.render('form-produtos');
});

app.get('/cadastroCliente', function(req, res){
    res.render('form-cliente');
});

app.get('/form-cadastro', function(req, res){
    res.render('form-cadastro');
});

//ALTERAÇÃO
app.get('/editar-vendedor/:id', (req, res) => {
  Vendedor.findById(req.params.id).sort({date:'desc'}).lean().then((vendedor) => {
    res.render('editar-vendedor',{vendedor:vendedor});
    }).catch((err) => {
        req.flash('error_msg',"Houve um erro ao listar"+err);
        res.redirect('lista-vendedor');

    });
});

app.get('/editar-vendas/:id', (req, res) => {
    Vendas.findById(req.params.id).sort({date:'desc'}).lean().then((vendas) => {
      res.render('editar-vendas',{vendas:vendas});
      }).catch((err) => {
          req.flash('error_msg',"Houve um erro ao listar"+err);
          res.redirect('lista-vendedor');
  
      });
  });

app.get('/editar-produto/:id', (req, res) => {
Produto.findById(req.params.id).sort({date:'desc'}).lean().then((produto) => {
    res.render('editar-produto',{produto:produto});
    }).catch((err) => {
        req.flash('error_msg',"Houve um erro ao listar"+err);
        res.redirect('editar-produto');

    });
});

app.get('/editar-cliente/:id', (req, res) => {
Cliente.findById(req.params.id).sort({date:'desc'}).lean().then((cliente) => {
    res.render('editar-cliente',{cliente:cliente});
    }).catch((err) => {
        req.flash('error_msg',"Houve um erro ao listar"+err);
        res.redirect('editar-cliente');

    });
});



//Cdastro Vendas
app.get('/cadastroVendas', (req, res) => {
    Vendedor.find().sort({date:'desc'}).lean().then((vendedor) => {
      res.render('form-vendas',{vendedor:vendedor});
      }).catch((err) => {
          req.flash('error_msg',"Houve um erro ao listar"+err);
          res.redirect('lista-vendas');
      });
  });

  app.get('/cadastroVendas', (req, res) => {
    Produto.find().sort({date:'desc'}).lean().then((produto) => {
      res.render('form-vendas',{produto:produto});
      }).catch((err) => {
          req.flash('error_msg',"Houve um erro ao listar"+err);
          res.redirect('lista-vendas');
      });
  });

app.listen(port, () => {
    console.log('Server OK');
});

app.get('/', function(req, res){
    res.render('login');
});