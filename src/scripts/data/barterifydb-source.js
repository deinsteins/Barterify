import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class BarterifyDbSource {
  static async register({
    email, username, password, passwordConfirm,
  }) {
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
          passwordConfirm,
        },
      });
      if (response.status !== 201) {
        throw new Error(response.message);
      }
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
      const responseUsername = response.data.data.user.username;
      localStorage.setItem(
        'token',
        JSON.stringify(responseToken),
      );
      localStorage.setItem('username', JSON.stringify(responseUsername));
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
          Authorization: `${jwtToken}`,
        },
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
          Authorization: `${jwtToken}`,
        },
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      return { error: err.response.data.message || err.message };
    }
  }

  static async profileEdit({
    firstname, lastname, gender, phone, address,
  }) {
    const jwtToken = localStorage.getItem('token').replaceAll('"', '');
    try {
      const response = await axios({
        url: `${API_ENDPOINT.PROFILE}`,
        method: 'PUT',
        headers: {
          Authorization: `${jwtToken}`,
        },
        data: {
          firstname,
          lastname,
          gender,
          phone,
          address,
        },
      });
      if (response.status !== 201) {
        throw new Error(response);
      }
      return response;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async Data() {
    try {
      const response = await axios.get('DATA.json');
      return response.data;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async ProductList(query) {
    const sortQuery = query;
    try {
      const response = await axios({
        url: `${API_ENDPOINT.PRODUCT_LIST}`,
        method: 'GET',
        params: { sortBy: sortQuery },
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async ProductSearch(query) {
    const sortQuery = query;
    try {
      const response = await axios({
        url: `${API_ENDPOINT.PRODUCT_LIST}`,
        method: 'GET',
        params: { name: sortQuery },
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async ProductFilter(query) {
    const filterQuery = query;
    try {
      const response = await axios({
        url: `${API_ENDPOINT.PRODUCT_LIST}`,
        method: 'GET',
        params: { category: filterQuery },
      });
      if (response.statusText !== 'OK') {
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
          Authorization: `${jwtToken}`,
        },
      });

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
          Authorization: `${jwtToken}`,
        },
      });

      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async AddProduct({
    name, price, waNumber, category, categoryName, dateOfPurchase, description, location,
  }) {
    const jwtToken = localStorage.getItem('token').replaceAll('"', '');
    try {
      const selectedFile = document.getElementById('productImage').files[0];
      const bodyFormData = new FormData();
      bodyFormData.append('name', name);
      bodyFormData.append('image', selectedFile);
      bodyFormData.append('price', price);
      bodyFormData.append('waNumber', waNumber);
      bodyFormData.append('category', category);
      bodyFormData.append('categoryName', categoryName);
      bodyFormData.append('description', description);
      bodyFormData.append('dateOfPurchase', dateOfPurchase);
      bodyFormData.append('location', location);
      const response = await axios({
        url: `${API_ENDPOINT.PRODUCT}`,
        method: 'POST',
        headers: {
          Authorization: `${jwtToken}`,
          'Content-Type': 'multipart/form-data',
        },
        data: bodyFormData,
      });
      if (response.status !== 201) {
        throw new Error(response);
      }
      return response;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async productEdit({
    name, price, waNumber, category, dateOfPurchase, description, location,
  }) {
    const jwtToken = localStorage.getItem('token').replaceAll('"', '');
    try {
      const bodyFormData = new FormData();
      const file = document.getElementById('productEditImage');
      if (!file.files[0]) {
        const selectedFile = document.getElementById('defaultImg').src.slice(36);
        bodyFormData.append('image', selectedFile);
      } else {
        const selectedFile = document.getElementById('product-edit-image').files[0];
        bodyFormData.append('image', selectedFile);
      }
      bodyFormData.append('name', name);
      bodyFormData.append('price', price);
      bodyFormData.append('waNumber', waNumber);
      bodyFormData.append('category', category);
      bodyFormData.append('description', description);
      bodyFormData.append('dateOfPurchase', dateOfPurchase);
      bodyFormData.append('location', location);
      const productId = sessionStorage.getItem('productId');
      const response = await axios({
        url: `${API_ENDPOINT.USER_PRODUCT_EDIT(productId)}`,
        method: 'PUT',
        headers: {
          Authorization: `${jwtToken}`,
          'Content-Type': 'multipart/form-data',
        },
        data: bodyFormData,
      });
      if (response.status !== 201) {
        throw new Error(response);
      }
      return response;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async UserProductDelete(id) {
    const jwtToken = localStorage.getItem('token').replaceAll('"', '');
    try {
      const response = await axios({
        url: `${API_ENDPOINT.USER_PRODUCT_DETAIL(id)}`,
        method: 'DELETE',
        headers: {
          Authorization: `${jwtToken}`,
        },
      });

      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async ProductDetail(id) {
    try {
      const response = await axios({
        url: `${API_ENDPOINT.PRODUCT_DETAIL(id)}`,
        method: 'GET',
      });
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      const responseProductId = response.data.data.name;
      sessionStorage.setItem('productName', JSON.stringify(responseProductId));
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
          Authorization: `${jwtToken}`,
        },
      });

      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async ApplyBarter({
    productId, productName, receiverId, receiverName, offer, productOfferId, message,
  }) {
    const jwtToken = localStorage.getItem('token').replaceAll('"', '');
    try {
      const response = await axios({
        url: `${API_ENDPOINT.BARTER}`,
        method: 'POST',
        headers: {
          Authorization: `${jwtToken}`,
        },
        data: {
          productId,
          productName,
          receiverId,
          receiverName,
          offer,
          productOfferId,
          message,
        },
      });
      if (response.status !== 201) {
        throw new Error(response);
      }
      return response;
    } catch (err) {
      return { error: err.response || err.message };
    }
  }

  static async GetBartersData() {
    const jwtToken = localStorage.getItem('token').replaceAll('"', '');
    try {
      const response = await axios({
        url: `${API_ENDPOINT.BARTER}`,
        method: 'GET',
        headers: {
          Authorization: `${jwtToken}`,
        },
      });

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
