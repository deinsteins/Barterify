import BarterifyDbSource from '../../data/barterifydb-source';
import { createUserProductListTemplate } from '../templates/template-creator';

const Inventory = {

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
                Produk Saya
            </h2>
            </div>
            <div class="lg:sticky lg:top-4" id="sidebarContainer">
            <div class="flex justify-between px-5 py-3">
          <a
            href="/#/product"
            id="btnAdd"
            name="commit"
            type="button"
            class="px-5 py-3 mx-auto text-xs font-medium text-white bg-blue-600 rounded"
          >
            Posting Barang/Jasa
          </a>
        </div>
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
        `
        ;
  },

  async afterRender() {
    const productData = await BarterifyDbSource.UserProductList();
    const productList = document.querySelector('#productCard');
    productData.data.forEach((product) =>{
      productList.innerHTML += createUserProductListTemplate(product);
    });
  },
};

export default Inventory;
