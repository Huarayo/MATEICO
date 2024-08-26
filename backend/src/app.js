const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/index');
const  app = express();


//Midleware para parsear los datos del formulario
app.use(cors( {
  origin: '*'
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Rutas
app.use('/api', contactRoutes);

module.exports = app;