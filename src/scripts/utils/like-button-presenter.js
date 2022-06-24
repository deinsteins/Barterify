import { createLikeButtonTemplate, createUnlikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteProduct, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._data = data;
    this._favoriteProduct = favoriteProduct;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._data;

    if (await this._isProductExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isProductExist(id) {
    const data = await this._favoriteProduct.getProduct(id);
    return !!data;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButtonContainer');
    likeButton.addEventListener('click', async () => {
      await this._favoriteProduct.putProduct(this._data);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikedButtonTemplate();
    const likeButton = document.querySelector('#likeButtonContainer');
    likeButton.addEventListener('click', async () => {
      await this._favoriteProduct.deleteProduct(this._data.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
