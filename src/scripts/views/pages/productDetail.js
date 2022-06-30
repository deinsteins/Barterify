import Swal from 'sweetalert2';
import BarterifyDbSource from '../../data/barterifydb-source';
import UrlParser from '../../routes/url-parser';
import { createOfferTemplate, createProductDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteProductIdb from '../../data/favorite-product-idb';
import { redirectWishlist } from '../../utils/redirect-helper';
import LoaderInitiator from '../../utils/loader-helper';

const productDetail = {
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
  <style>
    #barter-modal {
      background-color: rgba(16, 16, 16, 0.5);
    }
    #modalContainer {
      padding: 9.25rem;
    }
  </style>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    LoaderInitiator.showLoader();
    const { data } = await BarterifyDbSource.ProductDetail(url.id);
    if (!data) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Produk tidak ditemukan',
      });
      redirectWishlist();
    }
    const Container = document.querySelector('#productContainer');
    Container.innerHTML = createProductDetailTemplate(data);
    LoaderInitiator.closeLoader();

    document.getElementById('btnClose').addEventListener(('click'), async () => {
      const barterModal = document.getElementById('barter-modal');
      const productList = document.querySelector('#offer');
      barterModal.classList.add('hidden');
      productList.innerHTML = '';
    });

    document.getElementById('barter').addEventListener(('click'), async () => {
      const barterModal = document.getElementById('barter-modal');
      barterModal.classList.remove('hidden');
      const productsOffer = await BarterifyDbSource.UserProductList();
      const productList = document.querySelector('#offer');
      productsOffer.data.forEach((product) => {
        productList.innerHTML += createOfferTemplate(product);
      });
    });

    document.getElementById('btnSubmit').addEventListener('click', async (e) => {
      e.preventDefault();
      const productId = document.getElementById('productId').value;
      const productName = document.getElementById('productName').value;
      const receiverId = document.getElementById('receiverId').value;
      const receiverName = document.getElementById('receiverName').value;
      const option = document.getElementById('offer');
      const offer = option.options[option.selectedIndex].text;
      const productOfferId = option.options[option.selectedIndex].value;
      const message = document.getElementById('message').value;

      if (!offer) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Pilih barang yang ingin kamu tukar',
        });
      } else if (message.length < 20) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Pesan minimal 20 karakter',
        });
      } else {
        LoaderInitiator.showLoader();
        const barter = await BarterifyDbSource.ApplyBarter({
          productId,
          productName,
          receiverId,
          receiverName,
          offer,
          productOfferId,
          message,
        });
        LoaderInitiator.closeLoader();
        if (barter.error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mohon lengkapi semua data',
          });
        } else {
          Swal.fire({
            title: 'Berhasil mengirim permintaan barter',
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
        }
      }
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteProduct: FavoriteProductIdb,
      data,
    });
  },
};

export default productDetail;
