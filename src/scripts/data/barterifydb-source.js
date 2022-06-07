import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class BarterifyDbSource {
  static async register({ email, username, password,password_confirmation }) {
    try {
      const response = await axios({
        url: `${API_ENDPOINT.REGISTER}`,
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          username,
          password,
          password_confirmation,
        },
      });
      if (response.status !== 201) {
        throw new Error(response.message);
      }
      console.log(response.data.data);
      return response.data.data;
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }

  static async login({ email, password }) {
    try {
      const response = await axios({
        url: `${API_ENDPOINT.LOGIN}`,
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password,
        },
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      const responseToken = response.data.data.token;
      localStorage.setItem(
        'token',
        JSON.stringify(responseToken)
      );
      return response.data;
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }

    static async logout() {
      const jwtToken = localStorage.getItem('token').replaceAll('"', '');
      console.log(jwtToken);
      try {
        const response = await axios({
          url: `${API_ENDPOINT.LOGOUT}`,
          method: 'POST',
          headers: {
            'Authorization': `${jwtToken}`
          }
        });
        if (response.statusText !== 'OK') {
          throw new Error(response.data.message);
        }
        localStorage.removeItem('token');
        window.location.reload();
        return response.data;
      } catch (err) {
        return { error: err.response.data.message || err.message };
      }
  }

}

export default BarterifyDbSource;
