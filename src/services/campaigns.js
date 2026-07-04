import config from '../constants/enviroment';
import { getAll, postData } from './common';

export const getCampaigns = () => getAll(config.campaigns.all);
export const filterCampaigns = (body) =>
  postData(config.campaigns.filter, body);
