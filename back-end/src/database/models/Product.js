module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    urlImage: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    category: {
      allowNull: false,
      Type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4, 2),
    },
    webSource: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'products',
  });
  return Product;
};