const { body } = require('express-validator');

exports.validateForm = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio.')
    .isLength({ min:3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
  body('email')
    .notEmpty().withMessage('El email es obligatorio.')
    .isEmail().withMessage('Debes proporcionar un email válido.'),
  body('telefono')
    .optional( {  checkFalsy: true })
    .isNumeric().withMessage('El teléfono debe contener solo números.')
    .isLength({ min: 7, max: 15 }).withMessage('El teléfono debe tener entre 7 y 15 dígitos.'),

];