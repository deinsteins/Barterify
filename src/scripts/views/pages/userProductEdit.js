import Swal from 'sweetalert2';
import { createProductEditFormTemplate, createCategoriesTemplate } from '../templates/template-creator';
import BarterifyDbSource from '../../data/barterifydb-source';
import { redirectUserProductEdit } from '../../utils/redirect-helper';
import UrlParser from '../../routes/url-parser';

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
              Edit Product User
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
    const categoriesOptions = document.getElementById('product-edit-category');
    categories.data.forEach((category) => {
      categoriesOptions.innerHTML += createCategoriesTemplate(category);
    });

    const input = document.getElementById('product-edit-image');

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

    document.getElementById('editProductSubmit').addEventListener('click', async (e) => {
      e.preventDefault();
      const data = await BarterifyDbSource.productEdit({
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        waNumber: document.getElementById('waNumber').value,
        category: document.getElementById('product-edit-category').value,
        dateOfPurchase: document.getElementById('date-of-purchase').value,
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
          title: 'Barang/Jasa berhasil di ubah',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success');
            redirectUserProductEdit();
          }
        });
      }
    });
  },
};

export default UserProductEdit;
