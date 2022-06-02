import 'regenerator-runtime';

import '../styles/style.css';

import './component/app-bar';

import './component/footer-bar';

import App from './views/app';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
  