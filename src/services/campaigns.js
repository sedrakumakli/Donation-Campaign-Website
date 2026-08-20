import config from '../constants/enviroment';
import { getAll, getById, postData } from './common';

export const getCampaigns = () => getAll(config.campaigns.all);
export const getCampaignDetails = (id) => getById(config.campaigns.show , id);
export const filterCampaigns = (body) =>
  postData(config.campaigns.filter, body);
