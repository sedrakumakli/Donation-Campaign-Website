import config from '../constants/enviroment';
import { getAll, getById, postData } from './common';

export const getProfile =() =>getAll(config.profile.user);