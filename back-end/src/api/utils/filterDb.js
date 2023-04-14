const filterBySource = (products, source) => {
  if (source === 'todas') return products;
  return products.filter((product) => product.webSource === source);
};

const filterByCategory = (products, category) => (
  products.filter((product) => product.category === category)
);

const filterDb = (products, { source, category, name }) => {
  const sourceFiltered = filterBySource(products, source);
  const categoryFiltered = filterByCategory(sourceFiltered, category);
  const nameFiltered = categoryFiltered.filter((product) => 
    product.description.toLowerCase().includes(name.toLowerCase()));
  return nameFiltered;
};

module.exports = {
  filterDb,
};