const express = require ( 'express' );
const router = express.Router();
const passport = require('passport');
const denunciaController = require('../src/controller/denunciaController');
const loginController = require('../src/controller/loginController');

router.get('/getDenuncia', denunciaController.getDenuncia);
router.get('/getDenunciaById/:id', denunciaController.getDenunciaById);
router.get('/getDenunciaArquivada', denunciaController.getDenunciaArquivada);
router.post('/createDenuncia', denunciaController.createDenuncia);
router.put('/editDenuncia/:id', denunciaController.editDenuncia);
router.delete('/deleteDenuncia/:id', denunciaController.deleteDenuncia);
router.get('/getUsuario', loginController.getUsuario);
router.post('/getUsuarioByEmail', loginController.getUsuarioByEmail);
router.post('/createUsuario', loginController.createUsuario);
router.post('/doLogin', loginController.doLogin);
router.post('/login', passport.authenticate('local'), (req, res) => {
        req.user ? res.sendStatus(200) : res.sendStatus(401)
    }
);

module.exports = router;