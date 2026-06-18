import api from './axios';

export const getAll = async (endpoint) => {
  const res = await api.get(`/${endpoint}`);
  return res.data;
};

export const getById = (endpoint, id) => api.get(`/${endpoint}/${id}`);

export const filter = async (endpoint, body) => {
  const res = await api.post(`/${endpoint}`, body);

  return res.data;
};
