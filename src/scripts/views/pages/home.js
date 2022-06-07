import { createProductListTemplate, createFilterFormTemplate } from '../templates/template-creator';
import DATA from '../../../../DATA.json';

const Home = {

  async render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const header = document.querySelector('header');
    header.style.display = 'block';
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
    const container= document.querySelector('#content');
    container.innerHTML += createFilterFormTemplate();
    const productList = document.querySelector('#productCard');
    const getProducts = data => {
        let productsHTML = '';
        data.products.forEach((product) => {
          productsHTML += `
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                >
                  <div class="relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src="${product.pictureId}"
                      alt=""
                    />
                  </div>
                  <div class="p-4">
                    <span
                      class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
                      >${product.username}</span
                    >
                    <h2 class="mt-2 mb-2 font-bold">${product.name}</h2>
                    <p class="text-sm">
                    ${product.description.slice(0, 50)}...
                    </p>
                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Rp</span>&nbsp;<span
                        class="font-bold text-l"
                        >${product.price}</span
                      >
                    </div>
                  </div>
                   <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${product.createdAt}
                    </span>
                    <span class="flex items-center">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                      ${product.location}
                    </span>
                  </div>
                </a>
                </div>
            `;
        });
        productList.innerHTML = productsHTML;
      }
    getProducts(DATA);
  },
};

export default Home;
