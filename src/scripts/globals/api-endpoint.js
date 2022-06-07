import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/users/register`,
  LOGIN: `${CONFIG.BASE_URL}/users/login`,
  LOGOUT: `${CONFIG.BASE_URL}/users/logout`,
};

export default API_ENDPOINT;
