const productService = require('../services/product.service');

const getAllProducts = async (req, res) => {
  const filters = req.body;
  try {
    const result = await productService.getAllProducts(filters);
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProductsDb = async (_req, res) => {
  try {
    await productService.deleteAllProducts();
    return res.status(200).json({ message: 'table products deleted!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  deleteProductsDb,
};