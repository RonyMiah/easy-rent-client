import axios from 'axios';

const common_URL = 'https://easy-rent-server-kappa.vercel.app/api';

export const commonRequest = axios.create({
  commonURL: common_URL,
});
