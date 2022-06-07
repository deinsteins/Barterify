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
                  id="toy"
                  type="checkbox"
                  name="type[toy]"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <label for="toy" class="ml-3 text-sm font-medium">
                  Barang
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id="game"
                  type="checkbox"
                  name="type[game]"
                  class="w-5 h-5 border-gray-300 rounded"
                />

                <label for="game" class="ml-3 text-sm font-medium">
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
                    id="3+"
                    type="checkbox"
                    name="age[3+]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label for="3+" class="ml-3 text-sm font-medium">
                    Semua Lokasi
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="8+"
                    type="checkbox"
                    name="age[8+]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label for="8+" class="ml-3 text-sm font-medium">
                    Jawa Barat
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="12+"
                    type="checkbox"
                    name="age[12+]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label for="12+" class="ml-3 text-sm font-medium">
                    Jawa Tengah
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="16+"
                    type="checkbox"
                    name="age[16+]"
                    class="w-5 h-5 border-gray-300 rounded"
                  />

                  <label for="16+" class="ml-3 text-sm font-medium">
                    Jawa Timur
                  </label>
                </div>

                <div class="pt-2">
                  <button
                    type="button"
                    class="text-xs text-gray-500 underline"
                  >
                    Reset Lokasi
                  </button>
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


const createProductListTemplate = () => `
            <div class="flex flex-wrap -mx-4" id="productCard">
              <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                <a
                  href=""
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
                      >Nama User</span
                    >
                    <h2 class="mt-2 mb-2 font-bold">Lorem ipsum dolor</h2>
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    </p>
                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">Rp</span>&nbsp;<span
                        class="font-bold text-xl"
                        >45.000.000</span
                      >
                    </div>
                  </div>
                   <div class="p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 3 hari lalu
                    </span>
                    <span class="flex items-center">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                       Bekasi
                    </span>
                  </div>
                  
                </a>
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


export {
  createFilterFormTemplate,
  createProductListTemplate,
  createLoginRegisterFormTemplate
};
