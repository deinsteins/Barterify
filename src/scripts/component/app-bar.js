import { createNavlinkWithAuth, createNavlinkWithoutAuth } from "../views/templates/template-creator";
import BarterifyDbSource from "../data/barterifydb-source";

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <div class="hero-image">
    <div class="hero-title">
          <h1><b>Tukarkan barangmu disini.</b></h1>
          <p>Cepat, Mudah, dan Aman</p>
      </div>
    </div>
    <nav>
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center" >
          <img src="/images/Logo/Logo_Barterify_Putih.png" class="mr-3 h-6 sm:h-9" alt="Barterify Logo" />
      </a>
      <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false" id="menu_toggle">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" id="navlink">
         
          </div>
        </ul>
      </div>
    </div>
  </nav>
    </header>
    <style>
      .hide {
        opacity: 0;
        scale: 95;
      }
      .show {
        background-color: #112b3c;
        opacity: 100;
        scale: 100;
      }
      #user a {
        color: #fff;
      }
    </style>
      `;
      const navlinkContainer = document.getElementById('navlink');
      const checkAuth = localStorage.getItem('token');
      if (checkAuth == null) {
        navlinkContainer.innerHTML += createNavlinkWithoutAuth();
      } else {
        navlinkContainer.innerHTML += createNavlinkWithAuth();
        document.getElementById('user-menu-button').addEventListener('click', async (e) => {
          e.preventDefault();
          const userDropdown = document.getElementById('user');
          userDropdown.classList.toggle('show');
        });

        document.querySelector('main').addEventListener('click', async (e) => {
          e.preventDefault();
          const userDropdown = document.getElementById('user');
          userDropdown.classList.remove('show');
        });

        document.getElementById('user-menu-item-2').addEventListener('click', async (e) => {
          e.preventDefault();
          const data = await BarterifyDbSource.logout();
          if (data.success == '') {
            redirectUserRegister();
          } 
        })
      }
      
    }
}

customElements.define('app-bar', AppBar);
