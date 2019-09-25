import axios from 'axios';

const api = axios.create({
  baseURL: 'https://private-anon-0fb2d30e18-tradersclubapi.apiary-mock.com/api',
});

export default api;
