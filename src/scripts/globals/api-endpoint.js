import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/users/register`,
  LOGIN: `${CONFIG.BASE_URL}/users/login`,
  LOGOUT: `${CONFIG.BASE_URL}/users/logout`,
  PROFILE: `${CONFIG.BASE_URL}/profiles`,
  PRODUCT_LIST: `${CONFIG.BASE_URL}/products/all`,
};

export default API_ENDPOINT;
