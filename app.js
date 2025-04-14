const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la página principal!');
});

app.get('/about', (req, res) => {
  res.send('Esta es la página "Acerca de".');
});

app.get('/usuario/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola, ${nombre}!`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
