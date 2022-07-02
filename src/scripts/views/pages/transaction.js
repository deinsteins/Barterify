import BarterifyDbSource from '../../data/barterifydb-source';
import LoaderInitiator from '../../utils/loader-helper';
import { createApplyBarterList, createRequestBarterList } from '../templates/template-creator';

const Transaction = {

  async render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const hero = document.querySelector('.hero-image');
    hero.style.display = 'none';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = '#112b3c';
    nav.style.position = 'relative';
    const footer = document.querySelector('footer');
    footer.style.display = 'none';
    return `
    <section>
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <div class="relative max-w-3xl mx-auto text-center">
            <span class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

            <h2 class="relative inline-block px-4 text-2xl font-bold text-center bg-white">
                Transaksi Saya
            </h2>
            </div>
            <div class="container mx-auto">
            <h3 class="mt-3 mb-4 text-lg font-bold">
            Permintaan Barter
            </h3>
            <div class="grid gap-4 grid-cols-2" id="barterRequest">

            </div>
            </div>

          <div class="mt-5 container mx-auto">
            <h3 class="mt-3 mb-4 text-lg font-bold">
            Pengajuan Barter
            </h3>
            <div class="grid gap-4 grid-cols-2" id="barterApply">

            </div>
            </div>
          </div>
          </div>
        </section>
        <style>
        @media (max-width: 640px) {
          #barterRequest {
            grid-template-columns: 1fr;
          }

          #barterApply {
            grid-template-columns: 1fr;
          }
        }
      
      </style>
        `;
  },

  async afterRender() {
    LoaderInitiator.showLoader();
    const myId = await BarterifyDbSource.profile();
    const barterData = await BarterifyDbSource.GetBartersData();
    const requestContainer = document.getElementById('barterRequest');
    const applyContainer = document.getElementById('barterApply');

    for (let index = 0; index < barterData.data.length; index += 1) {
      const element = barterData.data[index];
      if (element.senderId !== myId.data.user) {
        requestContainer.innerHTML += createRequestBarterList(element);
      } else {
        applyContainer.innerHTML += createApplyBarterList(element);
      }
    }
    LoaderInitiator.closeLoader();
  },
};

export default Transaction;
