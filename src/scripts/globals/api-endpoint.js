import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/users/register`,
  LOGIN: `${CONFIG.BASE_URL}/users/login`,
  LOGOUT: `${CONFIG.BASE_URL}/users/logout`,
  PROFILE: `${CONFIG.BASE_URL}/profiles`,
  PRODUCT_LIST: `${CONFIG.BASE_URL}/products/all`,
  PRODUCT: `${CONFIG.BASE_URL}/products`,
  PRODUCT_DETAIL: (id) => `${CONFIG.BASE_URL}/products/all/${id}`,
  USER_PRODUCT_DETAIL: (id) => `${CONFIG.BASE_URL}/products/${id}`,
  USER_PRODUCT_EDIT: (id) => `${CONFIG.BASE_URL}/products/${id}`,
  CATEGORY: `${CONFIG.BASE_URL}/products-categories`,
  BARTER: `${CONFIG.BASE_URL}/barters`,
};

export default API_ENDPOINT;
