const { checkDb } = require('../utils/checkDb');
const { filterDb } = require('../utils/filterDb');
const { Product } = require('../../database/models');
const { filterProducts } = require('../utils/filterProducts');

const getAllProducts = async (filters) => {
  const dbProducts = await Product.findAll();
  if (checkDb(dbProducts, filters)) return filterDb(dbProducts, filters);

  const products = await filterProducts(filters);

  await Product.bulkCreate(products);

  const filteredProducts = products.filter((product) => 
  product.description.toLowerCase().includes(filters.name.toLowerCase()));

  return filteredProducts;
};

const deleteAllProducts = async () => {
  const dbProducts = await Product.findAll();
  if (dbProducts) {
    await Product.destroy({ where: {}, force: true });
    await Product.sequelize.query('ALTER TABLE products AUTO_INCREMENT = 1');
  }
};

module.exports = {
  getAllProducts,
  deleteAllProducts,
};