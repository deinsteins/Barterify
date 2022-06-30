import Swal from 'sweetalert2';
import { createProductEditFormTemplate, createCategoriesTemplate } from '../templates/template-creator';
import BarterifyDbSource from '../../data/barterifydb-source';
import { redirectUserProductEdit } from '../../utils/redirect-helper';
import UrlParser from '../../routes/url-parser';
import LoaderInitiator from '../../utils/loader-helper';

const UserProductEdit = {
  async render() {
    const hero = document.querySelector('.hero-image');
    hero.style.display = 'none';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#112b3c';
    nav.style.position = 'relative';
    const footer = document.querySelector('footer');
    footer.style.display = 'none';
    return `
        <div class="overlay" id="message-overlay"></div>
          <div class="px-4 text-center mt-11 sm:px-0">
            <h3 class="text-xl font-semibold leading-6 text-gray-900">
              Edit Produk Saya
            </h3>
        </div>
        <div class="mx-5 md:mx-3 md:col-span-2 px-5 py-3" id="productEditForm">         
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

            </div>
        </div>
        </div>  
`;
  },

  async afterRender() {
    LoaderInitiator.showLoader();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const product = await BarterifyDbSource.UserProductDetail(url.id);
    const productContainer = document.getElementById('productEditForm');
    productContainer.innerHTML += createProductEditFormTemplate(product);
    const Idproduct = product.data.id;
    sessionStorage.setItem(
      'productId',
      Idproduct,
    );
    const categories = await BarterifyDbSource.GetCategories();
    const categoriesOptions = document.getElementById('productCategory');
    categories.data.forEach((category) => {
      categoriesOptions.innerHTML += createCategoriesTemplate(category);
    });

    LoaderInitiator.closeLoader();

    const inputFile = document.getElementById('productEditImage');

    inputFile.addEventListener('change', async (e) => {
      const { target } = e;
      if (target.files && target.files[0]) {
        const maxAllowedSize = 2 * 1024 * 1024;
        if (target.files[0].size > maxAllowedSize) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'File terlalu besar, silahkan pilih file dibawah 2 MB',
          });
          target.value = '';
        }
      }
    });

    document.getElementById('editProductSubmit').addEventListener('click', async (e) => {
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
      const numbers = /^[0-9]+$/;

      if (name.length > 30) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nama Barang maksimal 30 karakter',
        });
      } else if (!price.match(numbers)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Harga produk hanya bisa di isi dengan angka',
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
      } else if (waNumber.toString().startsWith('628') === false || waNumber.length < 10) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nomor Whatapps harus diawali 628 dan minimal 10 karakter',
        });
      } else if (!waNumber.match(numbers)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nomor Whatapps hanya bisa di isi angka',
        });
      } else {
        LoaderInitiator.showLoader();
        const data = await BarterifyDbSource.productEdit({
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
          console.log(data);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mohon lengkapi semua data',
          });
        } else {
          Swal.fire({
            title: 'Barang/Jasa berhasil di ubah',
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Tersimpan', '', 'success');
              redirectUserProductEdit();
            }
          });
        }
      }
    });
  },
};

export default UserProductEdit;
