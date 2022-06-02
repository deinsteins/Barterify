import 'regenerator-runtime';

import '../styles/style.css';

import './component/app-bar';

import './component/footer-bar';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    content: document.querySelector('main'),
  });
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
  