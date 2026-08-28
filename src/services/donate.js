import config from '../constants/enviroment';
import { getAll, getById, postData } from './common';

export const getQRData = () => getAll(config.donate.QRData);
export const getPledgeData = (id) => getById(config.donate.pledgeData, id);
export const getRemainingAmountData = (id) =>
  getById(config.donate.misingAmount, id);
export const donateDirectly = (body) => postData(config.donate.direct, body);
export const createPledge = (body) => postData(config.donate.pledge, body);
export const payPledge = (id, body) =>
  postData(`${config.donate.completePledge}/${id}`, body);
export const payDateErr = (id, body) =>
  postData(`${config.donate.dateErrComplete}/${id}`, body);
export const payAmountErr = (body) =>
  postData(`${config.donate.amountErrComplete}`, body);
