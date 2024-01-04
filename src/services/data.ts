import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-mbp-db7b56455e9e.herokuapp.com',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});


export default api;