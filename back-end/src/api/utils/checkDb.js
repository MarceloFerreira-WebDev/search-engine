const checkProductSource = (products, source) => {
  if (source === 'todas') {
    return products.some((product) => product.webSource === 'Mercado Livre') 
    || products.some((product) => product.webSource === 'Buscape');
  }
  return products.some((product) => product.webSource === source);
};

const checkProductCategory = (products, category) => (
  products.some((product) => product.category === category)
);

const checkDb = (products, filters) => checkProductSource(products, filters.source) 
  && checkProductCategory(products, filters.category);
module.exports = {
  checkDb,
};