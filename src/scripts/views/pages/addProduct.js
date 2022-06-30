import Swal from 'sweetalert2';
import BarterifyDbSource from '../../data/barterifydb-source';
import LoaderInitiator from '../../utils/loader-helper';
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
    const categoriesOptions = document.getElementById('productCategory');
    categories.data.forEach((category) => {
      categoriesOptions.innerHTML += createCategoriesTemplate(category);
    });

    const input = document.getElementById('productImage');

    input.addEventListener('change', async (e) => {
      const { target } = e;
      if (target.files && target.files[0]) {
        const maxAllowedSize = 2 * 1024 * 1024;
        if (target.files[0].size > maxAllowedSize) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'File terlalu besar, silahkan pilih file dibawah 2mb',
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
      const option = document.getElementById('productCategory');
      const category = option.options[option.selectedIndex].value;
      const categoryName = option.options[option.selectedIndex].text;
      const dateOfPurchase = document.getElementById('dateOfPurchase').value;
      const description = document.getElementById('description').value;
      const location = document.getElementById('location').value;
      let GivenDate = dateOfPurchase;
      const CurrentDate = new Date();
      GivenDate = new Date(GivenDate);

      if (name.length > 30) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nama Barang maksimal 30 karakter',
        });
      } else if (GivenDate > CurrentDate) {
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
        LoaderInitiator.showLoader();
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
        LoaderInitiator.closeLoader();
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
              Swal.fire('Terposting', '', 'success');
              redirectInventory();
            }
          });
        }
      }
    });
  },
};

export default addProduct;
