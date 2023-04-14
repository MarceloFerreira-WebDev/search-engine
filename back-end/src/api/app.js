const express = require('express');
const productController = require('./controllers/product.controller');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/product', productController.getAllProducts);

module.exports = app;