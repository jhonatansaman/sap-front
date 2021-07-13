import axios from 'axios';

const url =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_LOCAL;

const api = axios.create({
  baseURL: url,
});

export default api;
