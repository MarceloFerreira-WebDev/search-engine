import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import productContext from './productContext';

function Provider({ children }) {
  const [filters, setFilters] = useState({
    source: '',
    category: '',
    name: '',
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const contextValue = useMemo(
    () => ({
      filters,
      setFilters,
      products,
      setProducts,
      loading,
      setLoading,
    }),
    [filters, products, loading],
  );

  return (
    <productContext.Provider value={ contextValue }>
      {children}
    </productContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
