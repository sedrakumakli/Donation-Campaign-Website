import api from './axios';

export const getAll = async (endpoint) => {
  const res = await api.get(`/${endpoint}`);
  return res.data;
};

export const getById = async (endpoint, id) => {
  const res = await api.get(`/${endpoint}/${id}`);
  return res.data;
};

export const postData = async (endpoint, body) => {
  const res = await api.post(`/${endpoint}`, body);

  return res.data;
};
