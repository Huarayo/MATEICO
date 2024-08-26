const express = require('express');
const contactRoutes = require('./contactRoutes.js');

const router = express.Router();

//Usa las rutas imoprtantadas

router.use('/', contactRoutes);

module.exports = router;