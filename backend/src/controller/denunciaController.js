const axios = require('axios');
const denunciaModel = require('../models/denunciaModel');

module.exports = {

    // GET (RETORNA DENUNCIA)
    async getDenuncia(req, res) {
        const denuncia = await denunciaModel.find({
            arquivada: false
        });
        return res.json(denuncia)        
    },

    // GET BY ID (RETORNA DENUNCIA POR ID)
    async getDenunciaById(req, res) {
        const id = req.params.id;
        const denuncia = await denunciaModel.findOne({
            id: id
        })
        return res.json(denuncia)
    },

    // GET ARQUIVADAS (RETORNA DENUNCIA ARQUIVADA)
    async getDenunciaArquivada(req, res) {
        const denuncia = await denunciaModel.find({
            arquivada: true
        });
        return res.json(denuncia)        
    },

    // POST (CRIA DENUNCIA)
    async createDenuncia(req, res) {
        const denuncia = await denunciaModel.create({
            id: req.body.id,
            name: req.body.name,
            category: req.body.category,
            department: req.body.department,
            date: req.body.date,
            email: req.body.email,
            contact: req.body.contact,
            description: req.body.description
        });

        return res.json(denuncia);
    },

    // PUT (ALTERA DENUNCIA)
    async editDenuncia(req, res) {
        const id = req.params.id || "";

        const name = req.body.name || "";
        const category = req.body.category || "";
        const department = req.body.department || "";
        const date = req.body.date || "";
        const email = req.body.email || "";
        const contact = req.body.contact || "";
        const description = req.body.description || "";
        const arquivada = req.body.arquivada;

        var dados = {
            id: id,
            name: name,
            category: category,
            department: department,
            date: date,
            email: email,
            contact: contact,
            description: description,
            arquivada: arquivada
        }

        if (name && category && department && date && email && contact && description && id) {
            var denuncia = await denunciaModel.updateOne({
                id: dados.id
            }, {
                name: dados.name,
                category: dados.category,
                department: dados.department,
                date: dados.date,
                email: dados.email,
                contact: dados.contact,
                description: dados.description,
                arquivada: dados.arquivada,
            });
            return res.json(denuncia);
        } else {
            var denuncia = await denunciaModel.updateOne({
                id: id
            }, {
                date: dados.date
            });
            return res.json(denuncia)
        }
    },

    // DELETE (DELETA DENUNCIA)
    async deleteDenuncia(req, res) {
        const id = req.params.id;
        const denuncia = await denunciaModel.deleteOne({
            id: id
        })
        return res.json(denuncia)
    }
}