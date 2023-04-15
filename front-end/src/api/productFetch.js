import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || 'localhost:3001';
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http';

const productFetch = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default productFetch;
