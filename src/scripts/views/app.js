import Swal from 'sweetalert2';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import scrollToTop from '../utils/scroll-helper';
import LoaderInitiator from '../utils/loader-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
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
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender(this._content);

    document.querySelector('.scroll-top').addEventListener(('click'), async (e) => {
      e.preventDefault();
      scrollToTop();
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#content').focus();
    });
  }
}

export default App;
