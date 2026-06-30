import config from '../constants/enviroment';
import { getAll, getById, postData } from './common';

export const getNews = () => getAll(config.news.all);

export const getLastestNews = () => getAll(config.news.latest);

export const getSingleNews = (id) => getById(config.news.details, id);

export const getNewsCategories = () => getAll(config.news.categories);

export const filterNews = (body) => postData(config.news.filter, body);
