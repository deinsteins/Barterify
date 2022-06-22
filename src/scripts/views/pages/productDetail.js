import BarterifyDbSource from '../../data/barterifydb-source';
import UrlParser from '../../routes/url-parser';
import { createProductDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteProductIdb from '../../data/favorite-product-idb';

const productDetail = {
  async render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const hero = document.querySelector('.hero-image');
    hero.style.display = 'none';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#112b3c';
    nav.style.position = 'relative';
    return `
    <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto" id="productContainer">
      
    </div>
  </section>

      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { data } = await BarterifyDbSource.ProductDetail(url.id);
    const Container = document.querySelector('#productContainer');
    Container.innerHTML = createProductDetailTemplate(data);
    const receiverName = data.username;
    sessionStorage.setItem('receiverName', JSON.stringify(receiverName));

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteProduct: FavoriteProductIdb,
      data,
    });
  },
};

export default productDetail;
