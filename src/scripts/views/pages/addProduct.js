import Swal from 'sweetalert2';
import BarterifyDbSource from '../../data/barterifydb-source';
import { redirectInventory } from '../../utils/redirect-helper';
import { createAddProductFormTemplate, createCategoriesTemplate } from '../templates/template-creator';

const addProduct = {
  async render() {
    const hero = document.querySelector('.hero-image');
    hero.style.display = 'none';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#112b3c';
    nav.style.position = 'relative';

    return `
      <div class="overlay" id="message-overlay"></div>
        <div class="px-4 text-center mt-3 z-50 sm:px-0">
            <h3 class="text-xl font-semibold leading-6 text-gray-900">
              Posting Barang
            </h3>
        </div>
        <div class="mx-5 md:mx-3 md:col-span-2 px-5 py-3" id="formContainer">
          
        </div>
      </div>
    </div>
    
        `;
  },

  async afterRender() {
    const container = document.getElementById('formContainer');
    container.innerHTML += createAddProductFormTemplate();
    const categories = await BarterifyDbSource.GetCategories();
    const categoriesOptions = document.getElementById('product-category');
    categories.data.forEach((category) => {
      categoriesOptions.innerHTML += createCategoriesTemplate(category);
    });

    const input = document.getElementById('product-image');

    input.addEventListener('change', async (e) => {
      const { target } = e;
      if (target.files && target.files[0]) {
        const maxAllowedSize = 2 * 1024 * 1024;
        if (target.files[0].size > maxAllowedSize) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'File too Big, please select a file less than 2mb',
          });
          target.value = '';
        }
      }
    });

    document.getElementById('btnSubmit').addEventListener('click', async (e) => {
      e.preventDefault();
      const data = await BarterifyDbSource.AddProduct({
        name: document.getElementById('product-name').value.toLowerCase(),
        price: document.getElementById('price').value,
        waNumber: document.getElementById('waNumber').value,
        category: document.getElementById('product-category').value,
        categoryName: document.getElementById('optionId').innerText,
        dateOfPurchase: document.getElementById('date').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value,
      });
      console.log(data);
      if (data.error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Mohon lengkapi semua data',
        });
      } else {
        Swal.fire({
          title: 'Barang/Jasa berhasil di posting',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success');
            redirectInventory();
          }
        });
      }
    });
  },
};

export default addProduct;
