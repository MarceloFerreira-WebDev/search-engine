const { getProductsFreeMarket } = require('./getProductsFreeMarket');

const filterProductsBySource = async ({ category, source }) => {
  if (source === 'Mercado Livre') return getProductsFreeMarket(category);
  if (source === 'Buscape') return [];

  const freeMarketProducts = await getProductsFreeMarket(category);
  
  const allProducts = freeMarketProducts;
  return allProducts;
};

const filterProducts = async (filters) => {
  const products = await filterProductsBySource(filters);

  return products;
};

module.exports = {
  filterProducts,
};