import axios from '../utils/axios';

export const getApartmentsList = () => {
  return axios.get('api//apartments');
};

export const getApartmentById = (id) => {
  return axios.get(`/api/apartments/${id}`);
};
