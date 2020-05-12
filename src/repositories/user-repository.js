const User = require('../app/models/user')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

exports.login = async (mail, pass) => {
    const user = await User.findOne({ email: mail });
    const id = user._id;
    if (user.email === mail && user.validPassword(pass)) {
        const token = jwt.sign({id}, process.env.SECRET, {expiresIn:60}); //1 min
        return token;
    }else{
        throw ({ status: 404, code: 'Usuário não encontrados', message: 'tente outro email' });   
    }
}

exports.register = async (mail, pass) => {
    const result = await User.find({ email: mail });

    if (result.length > 0) {
        throw ({ status: 400, code: 'Usuário já existe', message: 'tente outro email' });
    }

    const newUser = new User();
    newUser.email = mail;
    newUser.password = newUser.generateHash(pass)
    newUser.save((err, res) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
    });

    return {
        user: newUser
    }

}