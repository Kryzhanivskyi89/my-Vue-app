import axios from '../utils/axios';

export const bookApartment = (payload) => {
  return axios.post('/api/orders', payload);
};

export const getOrders = () => {
  return axios.get('/api/orders');
};
