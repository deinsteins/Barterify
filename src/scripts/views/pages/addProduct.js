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

      const name = document.getElementById('productName').value.toLowerCase();
      const price = document.getElementById('price').value;
      const waNumber = document.getElementById('waNumber').value;
      const category = document.getElementById('productCategory').value;
      const categoryName = document.getElementById('optionId').innerText;
      const dateOfPurchase = document.getElementById('dateOfPurchase').value;
      const description = document.getElementById('description').value;
      const location = document.getElementById('location').value;

      if (name.length > 30) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nama Barang maksimal 30 karakter',
        });
      } else if (dateOfPurchase > Date.now()) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Tanggal pembelian barang tidak boleh lebih dari hari ini',
        });
      } else if (description.length <= 40) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Deskripsi minimal 40 karakter',
        });
      } else if (waNumber.toString().startsWith('628') === false) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nomor Whatapps harus diawali 628',
        });
      } else {
        const data = await BarterifyDbSource.AddProduct({
          name,
          price,
          waNumber,
          category,
          categoryName,
          dateOfPurchase,
          description,
          location,
        });
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
              Swal.fire('Terposting!', '', 'sukses');
              redirectInventory();
            }
          });
        }
      }
    });
  },
};

export default addProduct;
