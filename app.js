const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('¡Bienvenido!');
});

// Importar rutas
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

// Usar rutas
app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
