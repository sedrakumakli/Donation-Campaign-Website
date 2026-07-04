import config from '../constants/enviroment';
import { getAll } from './common';

export const getProjects = () => getAll(config.projects.all);
