class ScrollTop extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <a href="#" class="scroll-top"><svg style="color: rgb(129, 112, 255);" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" fill="#8170ff"></path> </svg></a>
          `;
  }
}
customElements.define('scroll-top', ScrollTop);
