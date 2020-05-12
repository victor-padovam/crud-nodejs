const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

exports.authorize = function (req, res, next) {
    //1 passo - busco o token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        res.status(401).json({auth: false, message: 'Acesso restrito'});
    } else {
        //Token encontrado. Verificar Token.
        jwt.verify(token, process.env.SECRET, function (error, decode) {
            if (error) { //não conseguiu decodificar 
                res.status(401).json({auth: false, message: 'Token inválido'});
            } else {
                next();
            }
        });
    }
}