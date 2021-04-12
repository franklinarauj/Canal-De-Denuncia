const crypto = require("crypto");
let email;
let senha;

process.argv.forEach((value, index) => {

    if(index === 0){
        email = value
    }

    if(index === 1){
        senha = value
    }

});

const hash = crypto.createHash('sha256');

const senha = 'continua no proximo episodio';