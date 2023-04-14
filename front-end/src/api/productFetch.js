import axios from 'axios';

const productFetch = axios.create({
  baseURL: `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default productFetch;
