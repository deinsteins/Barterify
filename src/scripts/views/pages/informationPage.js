import BarterifyDbSource from '../../data/barterifydb-source';
import { createInformationPage } from '../templates/template-creator';

const InformationPage = {
    async render() {
        const hero = document.querySelector('.hero-image');
        hero.style.display = 'none';
        const nav = document.querySelector('nav');
        nav.style.backgroundColor = '#112b3c';
        nav.style.position = 'relative';
        return `
        <div class="max-w-screen-xl px-4 mx-auto md:px-8">
            <div class="mt-10 mb-10 md:mb-16">
            <h2
                class="
                mb-4
                text-2xl
                font-bold
                text-center text-gray-800
                lg:text-3xl
                md:mb-6
                "
            >
                Mengenal Barterify
            </h2>

            <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            Hai, kami adalah layanan pihak ketiga berbasis website.  Disini kami menyediakan layanan transaksi produk
            yang mana transaksi ini merupakan pertukaran produk dengan produk antar dua belah pihak yang saing teratrk dan menyetujui
            transaksi tersebut.
            </p>
        </div>

        <div class="max-w-screen-md mx-auto text-left text-gray-500 md:text-lg" id="information">
            <h1 class=" lg:text-3xl ml-14 text-gray-800 font-bold text-center mb-4" >Bagaimana cara bertransaksi di Barterify?</h1>
            <ol class="list-outside list-decimal mb-10 px-10 text-sm">
                <li>Buka pada halaman utama aplikasi ini.</li>
                <li>Klik menu <b>Daftar/Masuk</b>. Jika sudah memiliki akun silahkan masuk dengan akun yang dimiliki, jika belum memiliki akun anda dapat melakukan proses pendaftaran terlebih dahulu pada menu Sign Up.</li>
                <li>Setelah masuk anda dapat bebas memilih produk yang diunggah oleh user lain.</li>
                <li>Klik produk yang telah ditentukan, baca dengan teliti deskripsi tentang produk yang diminati.</li>
                <li>Jika ingin menyimpan produk tersebut ke dalam list produk yang anda minati, dapat menekan tombol <b>Simpan ke Keranjang</b>.</li>
                <li>Jika ingin melanjutkan transaksi tersebut anda dapat menekan tombol <b>Ajukan Tawaran Barter</b>.</li>
                <li>Selanjutnya akan muncul tampilan room chat, room chat tersebut merupakan fitur yang dapat membantu anda dan pemilik produk yang anda pilih untuk saling bernegosiasi.</li>
                <li>Ajukan negosiasi tentang produk yang telah diminati, serta ajukan produk milik anda yang hendak ditukarkan.</li>
                <li>Jika antara kedua belah pihak setuju, transaksi dapat dlanjutkan ke proses berikutya.</li>
                <li>Proses selanjutnya yakni proses <b>pengiriman produk</b>.</li>
                <li>Proses Pengiriman produk dapat di lakukan dengan cara menggunakan jasa pengiriman produk konvensional. <b>(Pengiriman produk dapat dilakukan diluar aplikasi)</b>.</li>
            </ol>
        </div>

        <div class="max-w-screen-md mx-auto text-left text-gray-500 md:text-lg" id="information">
            <h1 class=" lg:text-3xl ml-14 text-gray-800 font-bold text-center mb-4" >Bagaimana cara proses pengiriman produk di Barterify?</h1>
            <p class="list-outside list-decimal  px-10 text-sm">
               Dalam Barterify, proses pengiriman produk akan dilakukan secara manual. Hal ini dapat dilakukan dengan cara sebagai berikut :
               <ol class="list-outside list-decimal mb-10 px-10 text-sm">
                <li>Pastikan produk yang akan dikirim telah dikemas dengan aman.</li>
                <li>Sertakan alamat penerima produk di luar kemasan dengan jelas dan benar.</li>
                <li>Kunjungi jasa pengiriman konvensional.</li>
                <li>Searahkan paket produk ke petugas jasa pengiriman produk.</li>
                <li>produk siap dikirim ke alamat tujuan.</li>
               </ol>
            </p>
        </div>

        <div class="max-w-screen-md mx-auto text-left text-gray-500 md:text-lg" id="information">
        <h1 class=" lg:text-3xl ml-14 text-gray-800 font-bold text-center mb-4" >Bagaimana jika produk tidak sampai ke tangan pengguna setelah proses pengiriman ?</h1>
        <p class="list-outside list-decimal text-justify px-10 text-sm">
        Berhubung aplikasi masih dalam tahap pengembangan, sehingga fitur pengiriman produk masih menggunakan metode manual. Jika mengalami
        kendala produk tidak sampai ke tangan penerima maka silahkan lakukan hal berikut :
           <ol class="list-outside list-decimal mb-10 px-10 text-sm">
           <li>Silahkan hubungi pengirim produk pada fitur chat dalam applikasi.</li>
           <li>Tanyakan keterangan pengiriman produk yang telah pengirim kirimkan.</li>
           <li>Jika cara diatas tidak membuahkan hasil dalam kurun waktu kurang lebih 7x24 jam, silahkan hubungi kami <a href="https://api.whatsapp.com/send/?phone=%2B62123456563&text&app_absent=0" class="text-green-500"><b>disini</b></a>.</li>
           </ol>
        </p>
    </div>

      </div>

        `
    },

};

export default InformationPage;