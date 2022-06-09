import CONFIG from '../../globals/config';

const createFilterFormTemplate = () => `
    <div class="lg:sticky lg:top-4">
      <details
        open
        class="overflow-hidden border border-gray-200 rounded"
      >
        <summary
          class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"
        >
          <span class="text-sm font-medium"> Toggle Filters </span>

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

        <form action="" class="border-t border-gray-200 lg:border-t-0">
          <fieldset>
            <legend
              class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
            >
              Jenis
            </legend>

            <div class="px-5 py-6 space-y-2">
              <div class="flex items-center">
                <input
                  id="barang"
                  type="checkbox"
                  name="type[barang]"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <label for="barang" class="ml-3 text-sm font-medium">
                  Barang
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="jasa"
                  type="checkbox"
                  name="type[jasa]"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <label for="jasa" class="ml-3 text-sm font-medium">
                  Jasa
                </label>
              </div>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <legend
                class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
              >
                Lokasi
              </legend>

              <div class="px-5 py-6 space-y-2">
                <div class="flex items-center">
                  <input
                    id="semua-lokasi"
                    type="checkbox"
                    name="location[semua-lokasi]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label for="semua-lokasi" class="ml-3 text-sm font-medium">
                    Semua Lokasi
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="bekasi"
                    type="checkbox"
                    name="location[bekasi]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label for="bekasi" class="ml-3 text-sm font-medium">
                    Bekasi
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="jakarta"
                    type="checkbox"
                    name="location[jakarta]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label for="jakarta" class="ml-3 text-sm font-medium">
                    Jakarta
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="jogja"
                    type="checkbox"
                    name="location[jogja]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label for="jogja" class="ml-3 text-sm font-medium">
                    Yogyakarta
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div
            class="flex justify-between px-5 py-3 border-t border-gray-200"
          >
            <button
              name="commit"
              type="button"
              class="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
            >
              Tampilkan
            </button>
          </div>
        </form>
      </details>
      </div>
      <div class="lg:col-span-3">
      <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            <span class="hidden sm:inline"> Showing </span>
            24 Products
          </p>
      
          <div class="ml-4">
            <label for="SortBy" class="sr-only"> Sort </label>
      
            <select
              id="SortBy"
              name="sort_by"
              class="text-sm border-gray-100 rounded"
            >
              <option readonly>Sort</option>
              <option value="title-asc">Title, A-Z</option>
              <option value="title-desc">Title, Z-A</option>
              <option value="price-asc">Price, Low-High</option>
              <option value="price-desc">Price, High-Low</option>
            </select>
          </div>
        </div>
          <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4" id="productCard">
`;


const createProductListTemplate = (product) => `
        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a
          href="#/products/${product.id}"
          class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div class="relative pb-48 overflow-hidden">
            <img
              class="absolute inset-0 h-full w-full object-cover"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div class="p-4">
            <span
              class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
              >${product.username}</span
            >
            <h2 class="mt-2 mb-2 font-bold">${product.name}</h2>
            <p class="text-sm">
            ${product.details.description.slice(0, 50)}...
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
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">${product.username}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${product.name}</h1>
        <h2 class="text-sm title-font text-gray-500 tracking-widest">${product.createdAt.slice(0,10)}</h2>
        <p class="mt-6 leading-relaxed">${product.details.description}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Lokasi :</span>
            <span class="mr-3">${product.location}</span>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Tanggal Pembelian :</span>
            <div class="relative">
              <span class="mr-3">${product.details.dateOfPurchase.slice(0,10)}</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">Rp.${product.price.toLocaleString()}</span>
        </div>
        <div class="flex">
        <button class="flex mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Ajukan Barter</button>
          <button title="Chat dengan pemilik" class="mt-5 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </button>
          <button title="Tambahkan ke wishlist" class="mt-5 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      </div>
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
              class="absolute inset-0 h-full w-full object-cover"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div class="p-4">
            <span
              class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
              >${product.username}</span
            >
            <h2 class="mt-2 mb-2 font-bold">${product.name}</h2>
            <p class="text-sm">
            ${product.details.description.slice(0, 50)}...
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
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">${product.username}</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${product.name}</h1>
          <h2 class="text-sm title-font text-gray-500 tracking-widest">${product.createdAt.slice(0,10)}</h2>
          <p class="mt-6 leading-relaxed">${product.details.description}</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex">
              <span class="mr-3">Lokasi :</span>
              <span class="mr-3">${product.location}</span>
            </div>
            <div class="flex ml-6 items-center">
              <span class="mr-3">Tanggal Pembelian :</span>
              <div class="relative">
                <span class="mr-3">${product.details.dateOfPurchase.slice(0,10)}</span>
              </div>
            </div>
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">Rp.${product.price.toLocaleString()}</span>
          </div>
          <div class="flex">
          <button class="flex mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Ajukan Barter</button>
            <button title="Chat dengan pemilik" class="mt-5 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </button>
            <button title="Tambahkan ke wishlist" class="mt-5 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
          <div class="flex mt-5">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" id="btnEdit">Edit</button>
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" id="btnDelete">Hapus</button>
        </div>
        </div>
        </div>
`;

const createLoginRegisterFormTemplate = () => `
            <form class="sign-in-form" id="sign-in-form">
                <h2 class="title">Log in</h2>
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
                <input type="submit" value="Login" class="btn solid" />
              </form>
              <form class="sign-up-form" id="sign-up-form">
                <h2 class="title">Sign up</h2>
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
                <input type="submit" class="btn" value="Sign up" />
            </form>
`;

const createNavlinkWithoutAuth = () => `
            <li>
              <a href="#" class="block md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" id="link">Beranda</a>
              </li>
              <li>
              <a href="#/information-page" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="link">Informasi</a>
              </li>
              <li>
              <a href="#/about" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="link">Tentang Kami</a>
              </li>
              <li>
              <a href="#/login-register" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="link">Daftar/Masuk</a>
            </li>
`;

const createNavlinkWithAuth = () => `
            <li>
              <a href="#" class="block md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" id="link">Beranda</a>
              </li>
              <li>
              <a href="#/information-page" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="link">Informasi</a>
              </li>
              <li>
              <a href="#/about" class="block md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" id="link">Tentang Kami</a>
              </li>
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div class="mt-3" id="profileIcon">
                  <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
                  </button>
                </div>
                <div class="hide origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" id="user">
                  <a href="#/profile" class="block px-4 py-2 text-sm " role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm " role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#" class="block px-4 py-2 text-sm " role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
`;

const createProfileTemplate = (data) =>   `
        <div class="mt-11 md:flex no-wrap md:-mx-2" >
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2" >
              <!-- Profile Card -->
              <div class="bg-white p-3 border-t-4 border-green-400">
                <div class="image overflow-hidden">
                  <img
                    class="h-auto w-full mx-auto"
                    src="images/Logo/user.png"
                    alt=""
                  />
                </div>
                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1 text-center">${data.data.username}</h1>
                <ul
                  class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
                >
                  <li class="flex items-center py-3">
                    <span>Status</span>
                    <span class="ml-auto"
                      ><span class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                        >Active</span
                      ></span
                    >
                  </li>
                  <li class="flex items-center py-3">
                    <span>Member since</span>
                    <span class="ml-auto">Nov 07, 2016</span>
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
                  <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700 mt-4">
                  <div class="grid md:grid-cols-2 text-sm mb-3">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">First Name</div>
                      <div class="px-4 py-2">${data.data.firstname}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Last Name</div>
                      <div class="px-4 py-2">${data.data.lastname}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-4 py-2">${data.data.gender}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">${data.data.phone}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Current Address</div>
                      <div class="px-4 py-2">${data.data.address}</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email.</div>
                      <div class="px-4 py-2">${data.data.email}</div>
                    </div>
                </div>
                <button
                class="outline outline-2 outline-green-500 outline-offset-2 block w-full text-sm font-semibold rounded-lg hover:bg-green-300 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                id="btnEdit">
                Edit Profile
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
                      >First name</label
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
                      >Last name</label
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
                        >Email address</label
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
                  >Phone Number</label
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
                    >Gender</label
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
                    >Address</label
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
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Save</button>
            </div>
          </div>
          </form>
`;
const createTeamCardTemplate = (data) => `
      <div class="p-4 shadow">
      <div class="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
        <img
          src="${data.photo}"
          alt="Photo"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="flex flex-col items-center justify-center">
        <div class="font-bold text-indigo-500 md:text-lg">${data.name}</div>
        <p class="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
          ${data.role}
        </p>

        <div class="flex">
          <div class="flex gap-4">
            <a href="${data.facebook}">
              <svg
                class="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a href=${data.twitter}">
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
                    for="product-name"
                    class="block text-sm font-medium text-gray-700"
                    >Nama Barang</label
                    >
                    <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    autocomplete="email"
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
                    autocomplete="phone"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required 
                />
                </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="product-category"
                      class="block text-sm font-medium text-gray-700"
                      >Kategori</label
                    >
                    <select
                      id="product-category"
                      name="product-category"
                      autocomplete="product-category-name"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                <label
                    for="date"
                    class="block text-sm font-medium text-gray-700"
                    >Tanggal Beli</label
                >
                <input
                    type="date"
                    name="date"
                    id="date"
                    autocomplete="date"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    required 
                />
                </div>

                  <div class="col-span-6">
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="product-image"
                    >Upload foto</label
                > <input type="file" name="product-image"
                id="product-image" class="w-full text-gray-700 px-3 py-2 border rounded" >
                </div>

                  <div class="col-span-6">
                    <label
                      for="description"
                      class="block text-sm font-medium text-gray-700"
                      >Deskripsi</label
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
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  id="btnSubmit"
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
`;

const createCategoriesTemplate = (category) =>`
      <div>
      <option value="${category.id}">${category.name}</option>
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
};
