import React, { useContext } from 'react';
import productContext from '../Context/productContext';

function ProductList() {
  const { products } = useContext(productContext);
  return (
    <div>
      {products 
      && (
        products.map(({ description, urlImage, category, link, price, webSource }) => (
          <div key={description}>
            <img src={ urlImage } alt={ description } />
            <p>{description}</p>
            <p>{category}</p>
            <p>{webSource}</p>
            <p>{`R$ ${price}`}</p>
            <a href={link}>
              <button>
                Ir a Web
              </button>
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;