const createFilterFormTemplate = () => `
    <div class="lg:sticky lg:top-4">
      <details
        open
        class="overflow-hidden border border-gray-200 rounded"
      >
        <summary
          class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"
        >
          <span class="text-sm font-medium"> Filter Produk </span>

          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>

        <form action="" class="border-t border-gray-200 lg:border-t-0 p-2">
        <div id="cari-container" class="m-1" id="dicari">
          <input placeholder=" Silahkan cari produk ..." id="cariElement" class="rounded m-1 text-xs py-4" type="text">
          <button id="cariButtonElement" class="px-4 py-4 text-xs font-medium text-white bg-blue-900 rounded" type="submit">Cari</button>
        </div>
          <div>
            <fieldset>
              <legend
                class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
              >
                Kategori
              </legend>

              <div class="px-5 py-6 space-y-2" id="productCategory">
              
            </fieldset>
          </div>

          <div
            class="flex justify-between px-6 py-4 border-t border-gray-200"
          >
            <button
              name="commit"
              type="button"
              id="commit"
              class="px-6 py-4 text-xs font-medium text-white bg-blue-900 rounded"
            >
              Tampilkan
            </button>
            <button
              name="reset"
              type="button"
              id="reset"
              class="px-6 py-4 text-xs font-medium text-white bg-red-900 rounded"
            >
              Reset
            </button>
          </div>
        </form>
      </details>
      </div>
      <div class="lg:col-span-3">
      <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
          Menampilkan
            <span class="sm:inline" id="productCount">0</span>
            Produk
          </p>
      
          <div class="py-3 ml-4">
            <label for="SortBy" class="sr-only"> Sort </label>
      
            <select
              id="SortBy"
              name="sort_by"
              class="text-sm border-gray-100 py-3 rounded"
            >
              <option value="default">Urutkan</option>
              <option value="title-asc">Nama, A-Z</option>
              <option value="title-desc">Nama, Z-A</option>
              <option value="price-asc">Harga Terendah</option>
              <option value="price-desc">Harga Tertinggi</option>
            </select>
          </div>
        </div>
          <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4" id="productList">
`;

const createProductListTemplate = (product) => `
        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" id="productCard">
        <a
          href="#/products/${product.id}"
          class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div class="relative pb-48 overflow-hidden">
            <img
              class="lazyload absolute inset-0 h-full w-full object-cover"
              src="${product.image}"
              alt=""
            />
          </div>
          <div class="p-4">
            <span
              class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
              >${product.username}</span
            >
            <h2 class="mt-2 mb-2 font-bold" id="productName" style="text-transform: capitalize;">${product.name}</h2>
            <p class="text-sm">
            ${product.description.slice(0, 30)}...
            </p>
            <div class="mt-3 flex items-center">
              <span class="text-sm font-semibold">Rp</span>&nbsp;<span
                class="font-bold text-l"
                >${product.price}</span
              >
            </div>
          </div>
          <div class="p-4 border-t border-b text-xs text-gray-700">
            <span class="flex items-center mb-1">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${product.createdAt.slice(0, 10)}
            </span>
            <span class="flex items-center">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              ${product.location}
            </span>
          </div>
        </a>
        </div>

`;

const createProductDetailTemplate = (product) => `
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="${product.image}">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">${product.username}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="text-transform: capitalize;">${product.name}</h1>
        <h2 class="text-sm title-font text-gray-500 tracking-widest">${product.createdAt.slice(0, 10)}</h2>
        <p class="mt-6 leading-relaxed">${product.description}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Lokasi :</span>
            <span class="mr-3">${product.location}</span>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Tanggal Pembelian :</span>
            <div class="relative">
              <span class="mr-3">${product.dateOfPurchase.slice(0, 10)}</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">Rp.${product.price.toLocaleString()}</span>
        </div>
        <div class="flex">
        <button class="flex mt-5 text-white bg-indigo-500 border-0 py-3 px-6 hover:bg-indigo-600 rounded" data-modal-toggle="barter-modal" id="barter">Ajukan Barter</button>
        <!-- Main modal -->
        <div id="barter-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
            <div class="relative p-5 w-full h-full md:h-auto" id="modalContainer">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" id="btnClose" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="barter-modal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                    <div class="py-6 px-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Silahkan Ajukan Penawaran</h3>
                        <form class="space-y-6" action="#">
                            <input type="hidden" name="productId" id="productId" value="${product.id}" required>
                            <input type="hidden" name="productName" id="productName" value="${product.name}" required>
                            <input type="hidden" name="receiverId" id="receiverId" value="${product.user}" required>
                            <input type="hidden" name="receiverName" id="receiverName" value="${product.username}" required>
                            <div>
                                <label for="offer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pilih Barangmu yang ingin di barter</label>
                                <select
                                name="offer" id="offer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                </select>
                            </div>
                            <div>
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pesan</label>
                                <textarea
                                name="message" 
                                id="message" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                              /></textarea>
                            </div>
                            <button type="submit" id="btnSubmit" class="w-full text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Kirim Penawaran</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
          <a href="https://wa.me/${product.waNumber}" target="_blank" rel="noopener" title="Chat dengan pemilik" class="mt-5 rounded-full w-12 h-12 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
          <button title="Tambahkan ke wishlist" class="mt-5 rounded-full w-12 h-12s bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4" id="likeButtonContainer">
            
          </button>
        </div>
      </div>
      </div>
`;

const createLikeButtonTemplate = () => `
    <svg id="likeButton" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
    </svg>
`;

const createUnlikedButtonTemplate = () => `
    <svg id="likeButton" fill="#d10404" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
    </svg>
`;

const createUserProductListTemplate = (product) => `
        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a
          href="#/userproducts/${product.id}"
          class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
          id="productLink"
        >
          <div class="relative pb-48 overflow-hidden">
            <img
              class="lazyload absolute inset-0 h-full w-full object-cover"
              src="${product.image}"
              alt=""
            />
          </div>
          <div class="p-4">
            <span
              class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
              >${product.username}</span
            >
            <h2 class="mt-2 mb-2 font-bold" style="text-transform: capitalize;">${product.name}</h2>
            <p class="text-sm">
            ${product.description.slice(0, 30)}...
            </p>
            <div class="mt-3 flex items-center">
              <span class="text-sm font-semibold">Rp</span>&nbsp;<span
                class="font-bold text-l"
                >${product.price}</span
              >
            </div>
          </div>
          
          <div class="p-4 border-t border-b text-xs text-gray-700">
            <span class="flex items-center mb-1">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${product.createdAt.slice(0, 10)}
            </span>
            <span class="flex items-center">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              ${product.location}
            </span>
          </div>
        </a>
        </div>

`;

const createUserProductDetailTemplate = (product) => `
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="${product.image}">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">${product.username}</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" style="text-transform: capitalize;">${product.name}</h1>
          <h2 class="text-sm title-font text-gray-500 tracking-widest">${product.createdAt.slice(0, 10)}</h2>
          <p class="mt-6 leading-relaxed">${product.description}</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex">
              <span class="mr-3">Lokasi :</span>
              <span class="mr-3">${product.location}</span>
            </div>
            <div class="flex ml-6 items-center">
              <span class="mr-3">Tanggal Pembelian :</span>
              <div class="relative">
                <span class="mr-3">${product.dateOfPurchase.slice(0, 10)}</span>
              </div>
            </div>
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">Rp.${product.price.toLocaleString()}</span>
          </div>
          <div class="flex">
          </div>
          <div class="flex mt-5">
          <a href="#/product-edit/${product.id}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" id="btnEditProduct">Edit</a>
        <a href="#"class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" id="btnDeleteProduct">Hapus</a>
        </div>
        </div>
        </div>
`;

const createLoginRegisterFormTemplate = () => `
            <form class="sign-in-form" id="sign-in-form">
                <h2 class="title">Masuk ke Barterify</h2>
                <div class="input-field">
                  <i
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ACACAC"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </i>
                  <input type="text" placeholder="Username/Email" id="usernameLogin" required/>
                </div>
                <div class="input-field">
                  <i
                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <rect width="24" height="24" fill="none"></rect>
                      <path
                        d="M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM100,52a28,28,0,0,1,56,0V80H100Z"
                        fill="#acacac"
                      ></path>
                    </svg>
                  </i>
                  <input type="password" placeholder="Password" id="passwordLogin" required/>
                </div>
                <input type="submit" value="Masuk" class="btn solid" />
              </form>
              <form class="sign-up-form" id="sign-up-form">
                <h2 class="title">Daftar</h2>
                <div class="input-field">
                  <i
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ACACAC"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </i>
                  <input type="text" placeholder="Username" id="username" required/>
                </div>
                <div class="input-field">
                  <i
                    ><svg
                      style="color: rgb(172, 172, 172)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                        fill="#acacac"
                      ></path>
                    </svg>
                  </i>
                  <input type="email" placeholder="Email" id="email" required/>
                </div>
                <div class="input-field">
                  <i
                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <rect width="24" height="24" fill="none"></rect>
                      <path
                        d="M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM100,52a28,28,0,0,1,56,0V80H100Z"
                        fill="#acacac"
                      ></path>
                    </svg>
                  </i>
                  <input type="password" placeholder="Password" id="password" required minlength="8"/>
                </div>
                <div class="input-field">
                  <i
                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <rect width="24" height="24" fill="none"></rect>
                      <path
                        d="M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM100,52a28,28,0,0,1,56,0V80H100Z"
                        fill="#acacac"
                      ></path>
                    </svg>
                  </i>
                  <input type="password" placeholder="Password Confirmation" id="repassword" required minlength="8"/>
                </div>
                <input type="submit" class="btn" value="Daftar" />
            </form>
`;

const createNavlinkWithoutAuth = () => `
            <li>
              <a href="#" class="block md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" id="homeLink">Beranda</a>
              </li>
              <li>
              <a href="#/information-page" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="informationLink">Informasi</a>
              </li>
              <li>
              <a href="#/about" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="aboutLink">Tentang Kami</a>
              </li>
              <li>
              <a href="#/login-register" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="loginLink">Daftar/Masuk</a>
            </li>
`;

const createNavlinkWithAuth = () => `
            <li>
              <a href="#" class="block md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" id="homeLink">Beranda</a>
              </li>
              <li>
              <a href="#/information-page" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="informationLink">Informasi</a>
              </li>
              <li>
              <a href="#/about" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="aboutLink">Tentang Kami</a>
              </li>
              <li>
              <a href="#/chat" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="chatLink">Ruang Chat</a>
              </li>
              <li>
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div class="mt-3" id="profileIcon">
                  <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                  </button>
                </div>
                <div class="hide origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" id="user">
                  <a href="#/profile" class="block px-4 py-3 text-sm " role="menuitem" tabindex="-1" id="user-menu-item-0">Profil Saya</a>
                  <a href="#/wishlist" class="block px-4 py-3 text-sm " role="menuitem" tabindex="-1" id="user-menu-item-1">Wishlist</a>
                  <a href="#/inventory" class="block px-4 py-3 text-sm " role="menuitem" tabindex="-1" id="user-menu-item-1">Inventory Saya</a>
                  <a href="#/transaction" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="chatLink">Transaksi Saya</a>
                  <a href="#" class="block px-4 py-3 text-sm " role="menuitem" tabindex="-1" id="user-menu-item-2">Keluar</a>
                </div>
                </li>
`;

const createProfileTemplate = (data) => `
        <div class="mt-11 md:flex no-wrap md:-mx-2" >
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2" >
              <!-- Profile Card -->
              <div class="bg-white p-3 border-t-4 border-green-400">
                <div class="image overflow-hidden">
                  <img
                    class="h-auto w-full mx-auto"
                    src="logo/user.png"
                    alt="Foto Profil"
                  />
                </div>
                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1 text-center">${data.data.username}</h1>
                <ul
                  class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
                >
                  <li class="flex items-center py-3">
                    <span>Terdaftar Sejak</span>
                    <span class="ml-auto" id="createdAt">${data.data.createdSince.slice(0, 10)}</span>
                  </li>
                </ul>
              </div>
              <!-- End of profile card -->
              </div>
              <!-- Right Side -->
              <div class="w-full md:w-9/12 mx-2 h-64">
              <!-- Profile tab -->
              <!-- About Section -->
              <div class="bg-white p-3 shadow-md rounded-sm">
                <div
                  class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">Akun Saya</span>
                </div>
                <div class="text-gray-700 mt-4">
                  <div class="grid md:grid-cols-2 text-sm mb-3">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Nama Depan</div>
                      <div class="px-4 py-2">${data.data.firstname}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Nama Belakang</div>
                      <div class="px-4 py-2">${data.data.lastname}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Jenis Kelamin</div>
                      <div class="px-4 py-2">${data.data.gender}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Nomor Whatapps</div>
                      <div class="px-4 py-2">${data.data.phone}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Alamat</div>
                      <div class="px-4 py-2">${data.data.address}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email</div>
                      <div class="px-4 py-2">${data.data.email}</div>
                    </div>
                </div>
                <button
                class="outline outline-2 outline-green-500 outline-offset-2 block w-full text-sm font-semibold rounded-lg hover:bg-green-300 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                id="btnEdit">
                Edit Profil
              </button>
              <button
              id="btnInventory"
              class="outline outline-2 outline-green-500 outline-offset-2 block w-full text-sm font-semibold rounded-lg hover:bg-green-300 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Inventory saya
            </button>
            </div>
            </div>
            <!-- End of profile tab -->                
          </div>
          </div>
`;

const createProfileEditFormTemplate = (data) => `
          <form>
          <div class="shadow-md overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                      >Nama Depan</label
                    >
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value="${data.data.firstname}"
                      autocomplete="given-name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                      >Nama Belakang</label
                    >
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      value="${data.data.lastname}"
                      autocomplete="family-name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                        <label
                        for="email-address"
                        class="block text-sm font-medium text-gray-700"
                        >Email</label
                        >
                        <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autocomplete="email"
                        value="${data.data.email}"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-15 shadow-sm sm:text-sm border-gray-300 rounded-md w-full"
                        required
                        disabled
                        />
                    </div>

              <div class="col-span-6 sm:col-span-3">
              <label
                  for="phone-number"
                  class="block text-sm font-medium text-gray-700"
                  >Nomor Whatapps</label
              >
              <input
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="phone"
                  value="${data.data.phone}"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Contoh 62888211524416"
                  required
              />
              </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="gender"
                    class="block text-sm font-medium text-gray-700"
                    >Jenis Kelamin</label
                  >
                  <select
                    id="gender"
                    name="gender"
                    value="${data.data.gender}"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                    <option>Pria</option>
                    <option>Wanita</option>
                  </select>
                </div>
                <div class="col-span-6">
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700"
                    >Alamat</label
                  >
                  <textarea
                    name="saddress"
                    id="address"
                    autocomplete="address"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />${data.data.address}</textarea>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button 
                type="submit"
                id="editProfile"
                class="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Simpan</button>
            </div>
          </div>
          </form>
`;
const createTeamCardTemplate = (data) => `
      <div class="p-4 shadow">
      <div class="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <picture>
        <source media="(max-width: 600px)" srcset="${data.photoSmall}">
        <img
            class="lazyload"
            id="imgTeams"
            src="${data.photoLarge}" 
            alt="Profile Photo"></img>
        </picture>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="font-bold text-indigo-500 md:text-lg">${data.name}</div>
        <p class="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          ${data.role}
        </p>

        <div class="flex">
          <div class="flex gap-4">
            <a target="_blank" rel="noopener" href="${data.github}">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            <a target="_blank" rel="noopener" href="${data.twitter}">
              <svg
                class="w-6 h-6 text-blue-300 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
            <a target="_blank" rel="noopener" href="${data.linkedin}" >
              <svg
                class="w-6 h-6 text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>
`;
const createAddProductFormTemplate = () => `
<form action="#" >
            <div class="shadow-md overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-4">
                    <label
                    for="productName"
                    class="block text-sm font-medium text-gray-700"
                    >Nama Barang</label
                    >
                    <input
                    type="text"
                    name="productName"
                    id="productName"
                    autocomplete="productName"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-15 shadow-sm sm:text-sm border-gray-300 rounded-md w-full" required
                    />
                </div>

                <div class="col-span-6 sm:col-span-4">
                <label
                    for="price"
                    class="block text-sm font-medium text-gray-700"
                    >Harga Jual</label
                >
                <input
                    type="number"
                    name="price"
                    id="price"
                    autocomplete="price"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required 
                />
                </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="productCategory"
                      class="block text-sm font-medium text-gray-700"
                      >Kategori</label
                    >
                    <select
                      id="productCategory"
                      name="productCategory"
                      autocomplete="product-category-name"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                <label
                    for="dateOfPurchase"
                    class="block text-sm font-medium text-gray-700"
                    >Tanggal Pembelian Barang</label
                >
                <input
                    type="date"
                    name="dateOfPurchase"
                    id="dateOfPurchase"
                    autocomplete="dateOfPurchase"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required 
                />
                </div>

                  <div class="col-span-6">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="productImage"
                    >Upload foto (JPG/PNG) max 2 MB</label
                > <input type="file" name="productImage"
                id="productImage" accept=".jpg, .jpeg, .png" class="w-full text-gray-700 px-3 py-2 border rounded" >
                </div>

                  <div class="col-span-6">
                    <label
                      for="description"
                      class="block text-sm font-medium text-gray-700"
                      >Deskripsi (minimal 40 karakter)</label
                    >
                    <textarea name="description"
                    id="description" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" rows="4"></textarea>
                
                  </div>

                  <div class="col-span-6">
                  <label
                    for="location"
                    class="block text-sm font-medium text-gray-700"
                    >Lokasi</label
                  >
                  <textarea name="location"
                  id="location" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" rows="4"></textarea>
              
                </div>

                
                <div class="col-span-6 sm:col-span-4">
                <label
                for="waNumber"
                class="block text-sm font-medium text-gray-700"
                >Nomor Whatapps</label
                >

                <input
                  type="number"
                  name="waNumber"
                  id="waNumber"
                  autocomplete="waNumber"
                  placeholder="Contoh: 6281808275432"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required 
              />
              </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  id="btnSubmit"
                  type="submit"
                  class="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Posting Produk
                </button>
              </div>
            </div>
          </form>
`;

const createCategoriesTemplate = (category) => `
      <div>
      <option id="optionId" value="${category.id}">${category.name}</option>
      </div>
`;

const createProductEditFormTemplate = (data) => `
          <form>
          <div class="shadow-md overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6">
                    <img alt="ecommerce" id="defaultImg" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="${data.data.image}">
                    <label
                      class="block text-sm font-medium mt-10 text-gray-700"
                      for="productEditImage"
                      >Upload Foto (JPG/PNG) max 2 MB</label>
                    <input type="file" name="productImage" id="productEditImage" accept=".jpg, .jpeg, .png" class="w-full text-gray-700 px-3 py-2 border rounded"/>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="productName"
                      class="block text-sm font-medium text-gray-700"
                      >Nama Barang</label
                    >
                    <input
                      type="text"
                      name="productName"
                      id="productName"
                      value="${data.data.name}"
                      autocomplete="name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="price"
                      class="block text-sm font-medium text-gray-700"
                      >Harga Jual</label
                    >
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value="${data.data.price}"
                      autocomplete="price"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                        <label
                        for="productCategory"
                        class="block text-sm font-medium text-gray-700"
                        >Kategori Produk</label
                        >
                        <select
                          id="productCategory"
                          name="productCategory"
                          autocomplete="product-category-name"    
                          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                    <option id="optionId" value="${data.data.category}">${data.data.categoryName}</option>
                    </select>
                    </div>

              <div class="col-span-6 sm:col-span-3">
              <label
                  for="dateOfPurchase"
                  class="block text-sm font-medium text-gray-700"
                  >Tanggal Pembelian Barang</label
              >
              <input
                  type="date"
                  name="dateOfPurchase"
                  id="dateOfPurchase"
                  autocomplete="dateOfPurchase"
                  value="${data.data.dateOfPurchase.slice(0, 10)}"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
              />
              </div>
                <div class="col-span-6">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                    >Deskripsi</label
                  >
                  <textarea
                    name="description"
                    id="description"
                    autocomplete="description"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />${data.data.description}</textarea>
                </div>
                <div class="col-span-6">
                  <label
                    for="location"
                    class="block text-sm font-medium text-gray-700"
                    >Lokasi</label
                  >
                  <textarea
                    name="location"
                    id="location"
                    autocomplete="location"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required
                  />${data.data.location}</textarea>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label
                      for="waNumber"
                      class="block text-sm font-medium text-gray-700"
                      >Nomor Whatapps</label
                    >
                    <input
                      type="number"
                      name="waNumber"
                      id="waNumber"
                      value="${data.data.waNumber}"
                      autocomplete="waNumber"
                      placeholder="Contoh: 6281808275432"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button 
                type="submit"
                id="editProductSubmit"
                class="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Perbarui Data Produk</button>
            </div>
          </div>
          </form>
`;

const createOfferTemplate = (data) => `
      <option value="${data.id}">${data.name}</option>
`;

const createRequestBarterList = (data) => `
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-2 text-gray-800">${data.senderName}</h2>
            <p class="text-gray-300">${data.createdAt.slice(0, 10)}</p>
            <p class="text-gray-700">Penawaran Barter :<br><a class="text-lg font-bold text-blue-700" href="#/products/${data.productId}">${data.productName}</a> <svg style="display: inline;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/></svg> <a class="text-lg font-bold text-blue-700" href="#/products/${data.productOfferId}">${data.offer}</a></p>
            <p class="text-gray-700">${data.message}</p>
            <div class="mt-5">
            <a href="https://wa.me/${data.waNumber}" class="p-3 mt-2 rounded-lg bg-green-500 text-white hover:bg-green-700" id="btnAccept">Chat dengan Penawar</a>
            </div>
          </div>
`;

const createApplyBarterList = (data) => `
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <p class="text-gray-300">${data.createdAt.slice(0, 10)}</p>
            <h2 class="text-gray-700">Pengajuan Barter ke : <p class="inline font-bold">${data.receiverName}</h2>
            <h2 class="text-2xl font-bold mb-2 text-gray-800"><a class="text-2xl font-bold text-blue-700" href="#/products/${data.productId}">${data.productName}</a> <svg style="display: inline;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/></svg> <a class="text-2xl font-bold text-blue-700" href="#/products/${data.productOfferId}">${data.offer}</a></h2>
            <p class="text-gray-700">Status: <span class="status" id="offerStatus">${data.status}</span></p>
            <p class="text-gray-700">${data.message}</p>
          </div>
`;

export {
  createFilterFormTemplate,
  createProductListTemplate,
  createUserProductListTemplate,
  createAddProductFormTemplate,
  createCategoriesTemplate,
  createProductDetailTemplate,
  createUserProductDetailTemplate,
  createLoginRegisterFormTemplate,
  createNavlinkWithAuth,
  createNavlinkWithoutAuth,
  createProfileTemplate,
  createProfileEditFormTemplate,
  createTeamCardTemplate,
  createProductEditFormTemplate,
  createLikeButtonTemplate,
  createUnlikedButtonTemplate,
  createOfferTemplate,
  createRequestBarterList,
  createApplyBarterList,
};
