import BarterifyDbSource from '../../data/barterifydb-source';
import LoaderInitiator from '../../utils/loader-helper';
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
    <section id="content" tabindex="0">
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <div class="relative max-w-3xl mx-auto text-center">
            <span class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>
            <h2 class="relative inline-block px-4 text-2xl font-bold text-center bg-white">
                Rekomendasi
            </h2>
            </div>
            
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start" id="list">
                
            </div>
          </div>
        </section>
        `;
  },

  async afterRender() {
    const container = document.querySelector('#list');
    container.innerHTML += createFilterFormTemplate();
    const productList = document.querySelector('#productList');
    const productData = await BarterifyDbSource.ProductList();

    const clearCard = () => {
      productList.innerHTML = '';
    };

    const createProductList = (list) => {
      list.data.forEach((product) => {
        productList.innerHTML += createProductListTemplate(product);
      });
    };

    createProductList(productData);

    document.getElementById('SortBy').addEventListener(('change'), async () => {
      const optionValue = document.getElementById('SortBy').value;
      if (optionValue === 'title-asc') {
        clearCard();
        const sortByQuery = 'name';
        const productSort = await BarterifyDbSource.ProductList(sortByQuery);
        createProductList(productSort);
      } else if (optionValue === 'title-desc') {
        clearCard();
        const sortByQuery = 'name:desc';
        const productSort = await BarterifyDbSource.ProductList(sortByQuery);
        createProductList(productSort);
      } else if (optionValue === 'price-asc') {
        clearCard();
        const sortByQuery = 'price';
        const productSort = await BarterifyDbSource.ProductList(sortByQuery);
        createProductList(productSort);
      } else if (optionValue === 'price-desc') {
        clearCard();
        const sortByQuery = 'price:desc';
        const productSort = await BarterifyDbSource.ProductList(sortByQuery);
        createProductList(productSort);
      } else {
        clearCard();
        createProductList(productData);
      }
    });

    const countProduct = () => {
      const productCardTotal = document.querySelectorAll('[id=productCard]').length;
      const counterShow = document.getElementById('productCount');
      counterShow.innerText = productCardTotal;
    };
    countProduct();

    document.getElementById('cariElement').addEventListener(('keyup'), async (e) => {
      e.preventDefault();
      clearCard();
      const searchValue = document.getElementById('cariElement').value.toLowerCase();
      const productSearch = await BarterifyDbSource.ProductSearch(searchValue);
      createProductList(productSearch);
      countProduct();
    });

    document.getElementById('cariButtonElement').addEventListener(('click'), async (e) => {
      e.preventDefault();
      clearCard();
      const searchValue = document.getElementById('cariElement').value.toLowerCase();
      const productSearch = await BarterifyDbSource.ProductSearch(searchValue);
      createProductList(productSearch);
      countProduct();
    });

    const categories = await BarterifyDbSource.GetCategories();
    const categoriesOptions = document.getElementById('productCategory');
    categories.data.forEach((category) => {
      categoriesOptions.innerHTML += `
      <div class="flex items-center">
              <input
                id="category"
                type="radio"
                name="category"
                class="w-5 h-5 border-gray-300 rounded"
                value="${category.id}"
              />
              <label class="ml-3 text-sm font-medium" style="text-transform: capitalize;">
                ${category.name}
              </label>
              </div>
      `;
    });

    LoaderInitiator.closeLoader();

    document.getElementById('commit').addEventListener(('click'), async (e) => {
      LoaderInitiator.showLoader();
      e.preventDefault();
      clearCard();
      const inputCategory = document.querySelector('input[name="category"]:checked').value;
      const categoryFilter = await BarterifyDbSource.ProductFilter(inputCategory);
      createProductList(categoryFilter);
      countProduct();
      LoaderInitiator.closeLoader();
    });
    document.getElementById('reset').addEventListener(('click'), async () => {
      const inputCategory = document.getElementById('category');
      inputCategory.checked = false;
      clearCard();
      createProductList(productData);
      countProduct();
    });
    const footerPage = document.querySelector('footer');
    footerPage.classList.add('show');
  },
};

export default Home;
