import config from '../constants/enviroment';
import { getAll, getById, postData } from './common';

export const getCampaigns = () => getAll(config.campaigns.all);
export const getCampaignDetails = (id) => getById(config.campaigns.show , id);
export const campaignSearch = (name) => postData(config.campaigns.search , {name});
export const getGovernorates = ()=>getAll(config.campaigns.governorates);
export const getCities = ()=>getAll(config.campaigns.cities);
export const getDistricts = ()=>getAll(config.campaigns.districts);
export const getStatuses = ()=>getAll(config.campaigns.status);
export const filterCampaigns = (body) =>
  postData(config.campaigns.filter, body);
