import Swal from 'sweetalert2';
import BarterifyDbSource from '../../data/barterifydb-source';
import UrlParser from '../../routes/url-parser';
import { createUserProductDetailTemplate } from '../templates/template-creator';
import { redirectInventory } from '../../utils/redirect-helper';

const userProductDetail = {
  async render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const hero = document.querySelector('.hero-image');
    hero.style.display = 'none';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#112b3c';
    nav.style.position = 'relative';
    return `
    <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto" id="productContainer">
      
    </div>
  </section>

      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { data } = await BarterifyDbSource.UserProductDetail(url.id);
    const Container = document.querySelector('#productContainer');
    Container.innerHTML = createUserProductDetailTemplate(data);

    document.getElementById('btnDeleteProduct').addEventListener('click', async (e) => {
      e.preventDefault();
      Swal.fire({
        title: 'Apakah anda yakin ingin menghapus produk ini?',
        showDenyButton: true,
        showCancelButton: true,
        denyButtonText: 'No',
        confirmButtonText: 'Yes',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          BarterifyDbSource.UserProductDelete(url.id);
          Swal.fire('Terhapus', '', 'success');
          redirectInventory();
        } else if (result.isDenied) {
          Swal.fire('Dibatalkan', '', 'info');
        }
      });
    });
  },
};

export default userProductDetail;
