const express = require('express');
const { sendContactEmail } = require('../controllers/contactController')
const { textController } = require('../controllers/textController.js')
const { validateForm } = require('../middlewares/validationMiddleware.js')

const router = express.Router();

// Ruta POST para procesar el formulario con validaciones
router.post('/',validateForm,sendContactEmail);
router.get('/', textController)

module.exports = router;
