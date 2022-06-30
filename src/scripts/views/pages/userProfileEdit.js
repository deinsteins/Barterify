import Swal from 'sweetalert2';
import { createProfileEditFormTemplate } from '../templates/template-creator';
import BarterifyDbSource from '../../data/barterifydb-source';
import { redirectUserProfileEdit } from '../../utils/redirect-helper';
import LoaderInitiator from '../../utils/loader-helper';

const UserProfileEdit = {
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
              Edit Data Pribadi
            </h3>
        </div>
        <div class="mx-5 md:mx-3 md:col-span-2 px-5 py-3" id="profileForm">
         
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        </div>
      </div>
    </div>  
`;
  },

  async afterRender() {
    LoaderInitiator.showLoader();
    const profile = await BarterifyDbSource.profile();
    const profileContainer = document.getElementById('profileForm');
    profileContainer.innerHTML += createProfileEditFormTemplate(profile);
    LoaderInitiator.closeLoader();

    document.getElementById('editProfile').addEventListener('click', async (e) => {
      e.preventDefault();
      const firstname = document.getElementById('first-name').value;
      const lastname = document.getElementById('last-name').value;
      const gender = document.getElementById('gender').value;
      const phone = document.getElementById('phone-number').value;
      const address = document.getElementById('address').value;

      if (address.length < 20) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Tulis alamat lebih lengkap',
        });
      } else if (phone.toString().startsWith('628') === false) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nomor Handphone harus diawali 628',
        });
      } else {
        LoaderInitiator.showLoader();
        const data = await BarterifyDbSource.profileEdit({
          firstname,
          lastname,
          gender,
          phone,
          address,
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
            title: 'Profile berhasil diubah',
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Tersimpan', '', 'success');
              redirectUserProfileEdit();
            }
          });
        }
      }
    });
  },
};

export default UserProfileEdit;
