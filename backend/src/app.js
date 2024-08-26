const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const  app = express();


//Midleware para parsear los datos del formulario
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Rutas
app.use('/api', routes);

module.exports = app;