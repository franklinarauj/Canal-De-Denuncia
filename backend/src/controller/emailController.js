const axios = require('axios');
const emailModel = require('../models/emailModel');
const nodemailer = require("nodemailer");

module.exports = {
    // POST (CRIA DENUNCIA)
    // https://nodemailer.com/about/
    // https://nodemailer.com/smtp/
    async sendEmail(req, res) {

        const email = req.body.email;
        const assunto = req.body.assunto;
        const descricao = req.body.descricao;

        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Canal de denuncias" <canal_denuncias@noreply.com>', // sender address
            to: email, // list of receivers
            subject: assunto, // Subject line
            text: descricao, // plain text body
            html: `<b>${descricao}</b>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...



        console.log(email)
        console.log(assunto)
        console.log(descricao)

        return res.json(nodemailer.getTestMessageUrl(info));
    },

}