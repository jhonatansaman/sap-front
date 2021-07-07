import axios from 'axios';

const url =
  process.env.NODE_ENV === 'production'
    ? process.env.API_URL
    : process.env.API_LOCAL;

const api = axios.create({
  baseURL: url,
});

export default api;
