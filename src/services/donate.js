import config from '../constants/enviroment';
import { getAll, postData } from './common';

export const getQRData = () => getAll(config.donate.QRData);

export const donateDirectly = (body) => postData(config.donate.direct, body);
export const createPledge = (body) => postData(config.donate.pledge, body);
