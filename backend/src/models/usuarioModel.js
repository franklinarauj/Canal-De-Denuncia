const { Schema, model } = require("mongoose");

const usuario = new Schema({
    name: {
        type: String,
        required: true
    },  
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
})

module.exports = model('Usuario', usuario);