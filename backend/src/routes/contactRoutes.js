const express = require('express');
const { sendContactEmail } = require('../controllers/contactController')
const { validateForm } = require('../middlewares/validationMiddleware.js')

const router = express.Router();

// Ruta POST para procesar el formulario con validaciones
router.post('/',validateForm,sendContactEmail);


module.exports = router;
