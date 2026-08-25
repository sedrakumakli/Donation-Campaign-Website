import config from '../constants/enviroment';
import { getAll, getById, postData } from './common';

export const getProfile =() =>getAll(config.profile.user);
export const getStatistics = () => getAll(config.profile.statistics);
export const postChangeProfile = (formData) => postData(config.profile.changeProfile , formData);
export const postUpdatepass = (formData) => postData(config.profile.updatepass ,formData);
export const getDonations = () => getAll(config.profile.donations);
export const getInkinds = () => getAll(config.profile.inkinds);