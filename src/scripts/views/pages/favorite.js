import FavoriteProductIdb from '../../data/favorite-product-idb';
import LoaderInitiator from '../../utils/loader-helper';
import { createProductListTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const hero = document.querySelector('.hero-image');
    hero.style.display = 'none';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#112b3c';
    nav.style.position = 'relative';
    const footer = document.querySelector('footer');
    footer.style.display = 'none';
    return `
    <section>
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div class="relative max-w-3xl mx-auto text-center">
        <span class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

        <h2 class="relative inline-block px-4 text-2xl font-bold text-center bg-white">
            Wishlist Saya
        </h2>
        </div>
        <div class="lg:sticky lg:top-4" id="sidebarContainer">
  </div>
  <div class="lg:col-span-3">
  <div class="flex items-center justify-between">
      <div class="container mx-auto">
        <div class="flex flex-wrap -mx-4" id="productCard">
        
        </div>
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            
        </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    LoaderInitiator.showLoader();
    const list = await FavoriteProductIdb.getAllProduct();
    const productContainer = document.querySelector('#productCard');
    if (list.length === 0) {
      productContainer.innerHTML += `
      <p class="product__empty__label" tabindex="0">
        <b>Anda belum mempunyai wishlist produk</b>
      </p>
      `;
    }
    list.forEach((data) => {
      productContainer.innerHTML += createProductListTemplate(data);
    });
    LoaderInitiator.closeLoader();
  },
};

export default Favorites;
