import config from '../constants/enviroment';
import { getAll } from './common';

export const getCampaigns = () => getAll(config.campaigns.all);
