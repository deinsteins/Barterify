class FooterBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <footer><b>Barterify </b>| Capstone Project 2022</footer>
        `;
    }
  }
  
  customElements.define('footer-bar', FooterBar);
  