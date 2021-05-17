const axios = require('axios');
const usuarioModel = require('../models/usuarioModel');

module.exports = {
    // GET (RETORNA USUARIOS)
    async getUsuario(req, res) {
        const usuario = await usuarioModel.find({});
        console.log(usuario)
        return res.json(usuario)      
    },
    // GET BY EMAIL (RETORNA USUARIOS POR EMAIL)
    async getUsuarioByEmail(req, res) {
        //const email = req.body.email;
        const email = "teste2@teste.com";
        console.log(req.body)
        const usuario = await usuarioModel.findOne({
            email: email,
        });
        console.log(usuario)
        console.log('dale ?')
        return res.json(usuario);
    },
    // GET BY EMAIL (RETORNA USUARIOS POR EMAIL)
    async doLogin(req, res) {
        const email = req.body.email;
        const senha = req.body.pass;
        console.log(req.body)
        const usuario = await usuarioModel.findOne({
            email: email,
            senha: senha,
        });
        if (usuario) {
            return res.json(usuario)
        } else {
            // Não deu login
            return res.json(null)
        }
    },

    // POST (CRIA DENUNCIA)
    async createUsuario(req, res) {
        const denuncia = await usuarioModel.create({
            name: 'Usuário',
            email: req.body.email,
            senha: req.body.pass
        });

        return res.json(denuncia);
    },

    /*
    // GET BY EMAIL PARA AUTENTICACAO (RETORNA USUARIO POR EMAIL)
    async getUsuarioByEmail() {
        // console.log(email)
        const usuario = await usuarioModel.findOne({
            name: 'Franklin'
        })
        console.log(usuario)
        console.log('dasdasale ?')
        return usuario;
    }
    */

}