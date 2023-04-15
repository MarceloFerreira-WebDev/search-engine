const freeMarketMap = {
  Celular: 'celular',
  Refrigerator: 'refrigerador',
  TV: 'tv',
};

const mapFreeMarket = (type) => freeMarketMap[type];

module.exports = {
  mapFreeMarket,
};