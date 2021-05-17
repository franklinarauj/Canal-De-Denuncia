const { Schema, model } = require("mongoose");


const usuario = new Schema({
    name: {
        type: String,
        required: false
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

module.exports = model('Usuarios', usuario);