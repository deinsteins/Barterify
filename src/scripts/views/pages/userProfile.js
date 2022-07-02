import Swal from 'sweetalert2';
import BarterifyDbSource from '../../data/barterifydb-source';
import showMessage from '../../utils/alert-helper';
import LoaderInitiator from '../../utils/loader-initiator';
import { redirectInventory, redirectUserProfile } from '../../utils/redirect-helper';
import { createProfileTemplate } from '../templates/template-creator';

const UserProfile = {
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
          <div class="container mx-auto my-5 p-5" id="profile">
            
          </div>
          `;
  },

  async afterRender() {
    LoaderInitiator.showLoader();
    if (navigator.onLine === false) {
      Swal.fire({
        title: 'Tidak ada koneksi internet',
        showDenyButton: true,
        denyButtonText: 'Segarkan',
        confirmButtonText: 'Lanjutkan',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          LoaderInitiator.closeLoader();
        } else if (result.isDenied) {
          location.reload();
        }
      });
    }
    const profile = await BarterifyDbSource.profile();
    const profileContainer = document.getElementById('profile');
    profileContainer.innerHTML += createProfileTemplate(profile);
    if (profile.data.firstname === '' && profile.data.lastname === '' && profile.data.phone == null && profile.data.address === '') {
      showMessage('Mohon lengkapi profil anda');
      document
        .getElementById('message-overlay-close-button')
        .addEventListener('click', () => {
          document.getElementById('message-overlay').classList.remove('active');
          redirectUserProfile();
        });
    }

    document.getElementById('btnEdit').addEventListener('click', async () => {
      redirectUserProfile();
    });
    document.getElementById('btnInventory').addEventListener('click', async () => {
      redirectInventory();
    });
    LoaderInitiator.closeLoader();
  },
};

export default UserProfile;
