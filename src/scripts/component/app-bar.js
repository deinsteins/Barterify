class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
      <nav>
        <img
          src="/images/Logo/Logo_Barterify_Putih.png"
          class="logo"
          alt="Logo Barterify"
        />
        <ul>
          <li><a href="">Beranda</a></li>
          <li><a href="">Informasi</a></li>
          <li><a href="">Tentang Kami</a></li>
          <li><a href="../view/masuk.html" id="masuk">Masuk</a></li>
        </ul>
      </nav>
        <div class="hero-title">
          <h1><b>Tukarkan barangmu disini.</b></h1>
          <p>Cepat, Mudah, dan Aman</p>
      </div>
    </header>
      `;
  }
}

customElements.define('app-bar', AppBar);
