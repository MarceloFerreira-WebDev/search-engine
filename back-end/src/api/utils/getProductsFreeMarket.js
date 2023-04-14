const axios = require('axios');

const { mapFreeMarket } = require('./links');

const fetchProducts = async (productName) => {
  // seu código aqui  
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`;
  if (url.endsWith('undefined')) return new Error('You must provide an url');
  const result = await axios.get(url);
  const { data } = result;
  return data.results;
};

const getProductsFreeMarket = async (productType) => {
  const response = await fetchProducts(mapFreeMarket(productType));
  
  const readyList = response.map((product) => ({
    urlImage: product.thumbnail,
    description: product.title,
    category: productType,
    price: parseFloat(product.price).toFixed(2),
    webSource: 'Mercado Livre',
  }));
  return readyList;
};

module.exports = {
  getProductsFreeMarket,
};