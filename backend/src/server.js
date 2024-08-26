const app = require('./app');
const config = require('./config/config.js');


app.listen(config.port, () => {
  console.log(`Servidor escuchando en el puerto ${config.port}`)
})