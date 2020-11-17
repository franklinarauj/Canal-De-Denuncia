const express = require ( 'express' );
const router = express.Router();
const denunciaController = require('../src/controller/denunciaController');

router.get('/getDenuncia', denunciaController.getDenuncia);
router.get('/getDenunciaById/:id', denunciaController.getDenunciaById);
router.post('/createDenuncia', denunciaController.createDenuncia);
router.put('/editDenuncia/:id', denunciaController.editDenuncia);
router.delete('/deleteDenuncia/:id', denunciaController.deleteDenuncia);


module.exports = router;