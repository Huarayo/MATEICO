const express = require('express');
const contactRoutes = require('./contactRoutes');

const router = express.Router();

//Usa las rutas imoprtantadas

router.use('/contact', contactController.sendContactEmail);

module.exports = router;