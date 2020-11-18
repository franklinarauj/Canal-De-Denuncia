const { Schema, model } = require("mongoose");

const denuncia = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    contact: {
        type: String
    },
    description: {
        type: String,
        required: true,
        maxlength: '5000'
    },
    arquivada: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Denuncia', denuncia);
