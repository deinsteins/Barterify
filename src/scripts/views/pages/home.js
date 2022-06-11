import BarterifyDbSource from '../../data/barterifydb-source';
import { createProductListTemplate, createFilterFormTemplate } from '../templates/template-creator';

const Home = {

  async render() {
    const header = document.querySelector('header');
    header.style.display = 'block';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = 'rgba(17, 43, 60, 0.5)';
    nav.style.position = 'absolute';
    const hero = document.querySelector('.hero-image');
    hero.style.display = 'block';
    const footer = document.querySelector('footer');
    footer.style.display = 'block';
    return `
    <section>
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <div class="relative max-w-3xl mx-auto text-center">
            <span class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

            <h2 class="relative inline-block px-4 text-2xl font-bold text-center bg-white">
                Rekomendasi
            </h2>
            </div>
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start" id="content">
                
            </div>
          </div>
        </section>
        `;
  },

  async afterRender() {
    const productData = await BarterifyDbSource.ProductList();
    const container= document.querySelector('#content');
    container.innerHTML += createFilterFormTemplate();
    const productList = document.querySelector('#productList');
    productData.data.forEach((product) =>{
      productList.innerHTML += createProductListTemplate(product);
    });
    const productCardTotal = document.querySelectorAll('[id=productCard]').length;
    const counterShow = document.getElementById('productCount');
    counterShow.innerText = productCardTotal;
  },
};

export default Home;
