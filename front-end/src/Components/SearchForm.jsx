import React, { useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import productContext from '../Context/productContext';
import productFetch from '../api/productFetch';

function SearchForm() {
  const { filters, setFilters, setProducts, setLoading } = useContext(productContext);

  useEffect(() => async () => {
    await productFetch.delete('/product');
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleDisable = () => {
    if (!filters.source || !filters.category) return true;
    if (filters.source === 'Buscape') return true;
    return false;
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const products = await productFetch.post('/product', filters);
    setProducts(products.data);
    setLoading(false);
  };

  return (
    <Form onSubmit={ handleSubmit } className="form">
      <Form.Group>
        <Form.Select 
          name='source'
          onChange={ handleChange }
          defaultValue=""
          className="select"
        >
          <option value="" hidden>Web</option>
          <option value="todas">Todas</option>
          <option value="Mercado Livre">Mercado Livre</option>
          <option value="Buscape">Buscapé</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Select
          name='category'
          onChange={ handleChange }
          defaultValue=""
          className="select"
        >
          <option value="" hidden>Categorias</option>
          <option value="Refrigerator">Geladeira</option>
          <option value="TV">TV</option>
          <option value="Celular">Celular</option>
        </Form.Select>
      </Form.Group>
      <div className="search-by-name">
        <Form.Group className="search-input-div">
          <Form.Control
            name='name'
            type='text'
            placeholder='pesquisar'
            onChange={ handleChange }
            className="search-input"
          />
        </Form.Group>
        <Button type='submit' disabled={ handleDisable() } className="form-btn blue-btn">
          Search
        </Button>
      </div>
    </Form>
  );
}

export default SearchForm;
