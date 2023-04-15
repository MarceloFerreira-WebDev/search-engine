const express = require('express');
const cors = require('cors');
const productController = require('./controllers/product.controller');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/product', productController.getAllProducts);
app.delete('/product', productController.deleteProductsDb);

module.exports = app;