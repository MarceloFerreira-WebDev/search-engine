import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import productContext from '../Context/productContext';
import productFetch from '../api/productFetch';

function SearchForm() {
  const { filters, setFilters, setProducts } = useContext(productContext);

  const handleChange = ({ target: { name, value } }) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleDisable = () => {
    if (!filters.source || !filters.category) return true;
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const products = await productFetch.post('/product', filters);
    setProducts(products.data);
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        <Form.Select name='source' onChange={ handleChange }>
          <option value="" hidden>Web</option>
          <option value="todas">Todas</option>
          <option value="Mercado Livre">MercadoLivre</option>
          <option value="Buscape">Buscapé</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Select name='category' onChange={ handleChange }>
          <option value="" hidden>Categorias</option>
          <option value="Refrigerator">Geladeira</option>
          <option value="TV">TV</option>
          <option value="Celular">Celular</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Control name='name' type='text' placeholder='pesquisar' onChange={ handleChange }/>
      </Form.Group>
      <Button variant='primary' type='submit' disabled={ handleDisable() }>
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
