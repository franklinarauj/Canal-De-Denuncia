const express = require ( 'express' );
const mongoose = require ( 'mongoose' );
const cors = require ( 'cors' );
const bodyparser = require ( 'body-parser' );

const port = process.env.port || 8000;

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(require('./routes'));

mongoose.connect('mongodb+srv://usuario:senha@qualquer-coisa.3gx2a.mongodb.net/Denuncia?retryWrites=true&w=majority',
 { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
     if (err) {
         console.log(err);
     }
     else {
         app.listen(port, () => {
             console.log("SERVIDOR RODANDO NA PORTA: 8000");
         })
     }
 });