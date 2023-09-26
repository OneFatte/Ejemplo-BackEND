const express = require('express');
const server = express();
const port = 3000;

const Routes = require('./routes');

server.use('/clients', Routes.ClientRoutes);
server.use('/products', Routes.ProductRoutes);
server.use('/sales', Routes.SaleRoutes);

server.listen(port, () => {
    console.log(`API escuchando en el puerto:  ${port}`);
});

