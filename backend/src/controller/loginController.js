const axios = require('axios');
const usuarioModel = require('../models/usuarioModel');

module.exports = {
    // GET (RETORNA USUARIOS)
    async getUsuario(req, res) {
        const usuario = await usuarioModel.find({
        });
        return res.json(usuario)      
    },
    // GET BY EMAIL (RETORNA USUARIOS POR EMAIL)
    async getUsuarioByEmail(req, res) {
        const email = req.body.email;
        const usuario = await usuarioModel.findOne({
            email: email,
        });
        return res.json(usuario)
    },
    // GET BY EMAIL PARA AUTENTICACAO (RETORNA USUARIO POR EMAIL)
    async getUsuarioByEmail(email) {
        console.log(email)
        const usuario = await usuarioModel.findOne({
            email: email
        })
        return usuario;
    }
}