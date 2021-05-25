const { Schema, model } = require("mongoose");


const email = new Schema({
    email: {
        type: String,
        required: false
    },
    assunto: {
        type: String,
        required: false
    },
    descricao: {
        type: String,
        required: false
    }
})

module.exports = model('Email', email);