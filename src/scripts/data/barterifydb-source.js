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

    static async profile() {
      const jwtToken = localStorage.getItem('token').replaceAll('"', '');
      try {
        const response = await axios({
          url: `${API_ENDPOINT.PROFILE}`,
          method: 'GET',
          headers: {
              'Authorization': `${jwtToken}`
          }
        })
        if (response.statusText !== 'OK') {
          throw new Error(response.data.message);
        }
        return response.data;
      } catch (err) {
        return { error: err.response.data.message || err.message};
      }
    }

    static async profileEdit({ firstname, lastname, gender, phone, address }) {
      const jwtToken = localStorage.getItem('token').replaceAll('"', '');
      try {
        const response = await axios({
          url: `${API_ENDPOINT.PROFILE}`,
          method: 'PUT',
          headers: {
            'Authorization': `${jwtToken}`
        },
        data: {
          firstname,
          lastname,
          gender,
          phone,
          address,
        },
        })
        if (response.status !== 201) {
          throw new Error(response);
        }
        console.log(response);
        return response;
      } catch (err) {
        return { error: err.response  || err.message };
      }
    }

    static async Data() {
      try {
        const response = await axios.get('DATA.json');
        console.log(response.data);
        return response.data;
      } catch (err) {
        return { error: err.response || err.message };
      }
    }

    static async ProductList() {
      try {
        const response = await axios({
          url: `${API_ENDPOINT.PRODUCT_LIST}`,
          method: 'GET',
        })

        if(response.statusText !== 'OK'){
          throw new Error(response.data.message);
        }
        return response.data;
      } catch (err) {
        return { error: err.response || err.message };
      }
    }

    static async UserProductList() {
      const jwtToken = localStorage.getItem('token').replaceAll('"', '');
      try {
        const response = await axios({
          url: `${API_ENDPOINT.PRODUCT}`,
          method: 'GET',
          headers: {
            'Authorization': `${jwtToken}`
          },
        })

        if (response.statusText !== 'OK') {
          throw new Error(response.data.message);
        }
        return response.data;
      } catch (err) {
        return { error: err.response || err.message };
      }
    }

    static async GetCategories() {
      const jwtToken = localStorage.getItem('token').replaceAll('"', '');
      try {
        const response = await axios({
          url: `${API_ENDPOINT.CATEGORY}`,
          method: 'GET',
          headers: {
            'Authorization': `${jwtToken}`
          },
        })

        if (response.statusText !== 'OK') {
          throw new Error(response.data.message);
        }
        return response.data;
      } catch (err) {
        return { error: err.response || err.message };
      }
    }

    static async AddProduct({ name, price, category, dateOfPurchase, description, location }) {
      const jwtToken = localStorage.getItem('token').replaceAll('"', '');
      try {
        const selectedFile = document.getElementById("product-image").files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('name', name);
        bodyFormData.append('image', selectedFile);
        bodyFormData.append('price', price);
        bodyFormData.append('category', category);
        bodyFormData.append('description', description);
        bodyFormData.append('dateOfPurchase', dateOfPurchase);
        bodyFormData.append('location', location);
        const response = await axios({
          url: `${API_ENDPOINT.PRODUCT}`,
          method: 'POST',
          headers: {
            'Authorization': `${jwtToken}`,
            'Content-Type': 'multipart/form-data',
        },
        data: bodyFormData,
        })
        if (response.status !== 201) {
          throw new Error(response);
        }
        console.log(response);
        return response;
      } catch (err) {
        return { error: err.response  || err.message };
      }
    }

    static async productEdit({ name, price, category, dateOfPurchase, description,location }) {
      const jwtToken = localStorage.getItem('token').replaceAll('"', '');
      try {
        const response = await axios({
          url: `${API_ENDPOINT.USER_PRODUCT_DETAIL(id)}}`,
          method: 'PUT',
          headers: {
            'Authorization': `${jwtToken}`
        },
        data: {
          name,
          price,
          category,
          dateOfPurchase,
          description,
          location,
        },
        })
        if (response.status !== 201) {
          throw new Error(response);
        }
        console.log(response);
        return response;
      } catch (err) {
        return { error: err.response  || err.message };
      }
    }

    static async ProductDetail(id) {
      try {
        const response = await axios({
          url: `${API_ENDPOINT.PRODUCT_DETAIL(id)}`,
          method: 'GET',
        })

        if (response.statusText !== 'OK') {
          throw new Error(response.data.message);
        }
        return response.data;
      } catch (err) {
        return { error: err.response || err.message };
      }
    }

    static async UserProductDetail(id) {
      const jwtToken = localStorage.getItem('token').replaceAll('"', '');
      try {
        const response = await axios({
          url: `${API_ENDPOINT.USER_PRODUCT_DETAIL(id)}`,
          method: 'GET',
          headers: {
            'Authorization': `${jwtToken}`
        },
        })

        if (response.statusText !== 'OK') {
          throw new Error(response.data.message);
        }
        return response.data;
      } catch (err) {
        return { error: err.response || err.message };
      }
    }
}

export default BarterifyDbSource;
