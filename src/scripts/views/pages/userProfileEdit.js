import { createProfileEditFormTemplate } from "../templates/template-creator";
import BarterifyDbSource from "../../data/barterifydb-source";
import { redirectUserProfileEdit } from "../../utils/redirect-helper";
import showMessage from "../../utils/alert-helper";

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
              Edit Personal Information
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
      const profile = await BarterifyDbSource.profile();
      const profileContainer = document.getElementById('profileForm');
      profileContainer.innerHTML += createProfileEditFormTemplate(profile);

      document.getElementById('editProfile').addEventListener('click', async (e) => {
        e.preventDefault();
        const data = await BarterifyDbSource.profileEdit({
          firstname: document.getElementById('first-name').value,
          lastname: document.getElementById('last-name').value,
          gender: document.getElementById('gender').value,
          phone: document.getElementById('phone-number').value,
          address: document.getElementById('address').value,
        });
        console.log(data);
        if (data.error) {
          showMessage(data.error);
        } else {
          showMessage('Profile berhasil di update');
          redirectUserProfileEdit();
          window.location.reload();
        }
      });
    },
};

export default UserProfileEdit;