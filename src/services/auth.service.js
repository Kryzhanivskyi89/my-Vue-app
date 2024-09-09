import axios from '../utils/axios';

export const loginUser = (payload) => {
  return axios.post('/api/users/login', payload);
};

export const registerUser = (payload) => {
  return axios.post('/api/users/register', payload);
};

export const logout = () => {
  return axios.post('/api/users/logout');
};
