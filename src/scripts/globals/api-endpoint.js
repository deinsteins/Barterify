import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}auth/register`,
  SIGNIN: `${CONFIG.BASE_URL}auth/sign_in`,
};

export default API_ENDPOINT;
