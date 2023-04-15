import React, { useContext } from 'react';
import productContext from '../Context/productContext';

function ProductList() {
  const { products, filters, loading } = useContext(productContext);
  return (
    <div>
      {
        (filters.source === 'Buscape' || filters.source === 'todas')
        && (
          <p className="red-text">Infelizmente, o Buscapé não permite a raspagem em seu site</p>
        )
      }
      {
        loading
        && <h1 className='loading-msg'>CARREGANDO...</h1>
      }
      {products
      && (
        products.map(({ description, urlImage, category, link, price, webSource }) => (
          <div key={description} className="product-div">
            <img src={ urlImage } alt={ description } className="product-img"/>
            <div className="product-infos">
              <p className="product-description">{description}</p>
              <p className="product-category-n-source">{`${category}, ${webSource}`}</p>
              <p className="product-price">{`R$ ${price}`}</p>
            </div>
            <a href={link}>
              <button className="product-btn blue-btn">
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