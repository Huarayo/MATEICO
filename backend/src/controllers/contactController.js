const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
require('dotenv').config({path: '../.env'});


// Configuracion del transporte de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'leohuarayo@gmail.com',
    pass: 'jvuxhenayzohxhro'
  }
})

exports.sendContactEmail =  async(req, res) => {
  //ver cuantos errores hay y que no siga el codigo
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }


  //ENVIO POR CORREO
  const { nombre, email, mensaje, telefono} = req.body;

  //creu un entorno de DOM para DOMPurify
  const { window } = new JSDOM('');
  const domPurify = DOMPurify(window);

  const sanitizedMessage = domPurify.sanitize(mensaje);

  const mailOptions = {
    from: email, //tu direccion de correo
    to: 'leohuarayo@gmail.com', //listado'de distanatarios
    subject: `Nuevo mensaje de ${nombre}`,
    html: `
    <p>Hola,</p>
    <p>Has recibido un nuevo mensaje desde tu formulario de contacto.</p>
    <p><b>Nombre:</b> ${nombre}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Télefono:</b> ${telefono}</p>
    <p><b>Mensaje:</b></p>
    <div>${sanitizedMessage}</div>
`
  }

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Formulario validado y mensaje enviado correctamente.'})
  } catch (error) {
    console.error('Error al enviar al correo: ', error);
    res.status(500).json({ message: 'Error interno del servidor.'})
  }

}



