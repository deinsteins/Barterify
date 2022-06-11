import { createProductEditFormTemplate, createCategoriesTemplate} from "../templates/template-creator";
import BarterifyDbSource from "../../data/barterifydb-source";
import { redirectUserProductEdit } from "../../utils/redirect-helper";
import showMessage from "../../utils/alert-helper";
import UrlParser from '../../routes/url-parser';
import Swal from 'sweetalert2';

const UserProductEdit = {
    async render() {
        const hero = document.querySelector('.hero-image');
        hero.style.display = 'none';
        const nav = document.querySelector('nav');
        nav.style.backgroundColor = '#112b3c';
        nav.style.position = 'relative';
        const footer = document.querySelector('footer');
        footer.style.display = 'none';
        return `
        <div class="overlay" id="message-overlay"></div>
          <div class="px-4 text-center mt-11 sm:px-0">
            <h3 class="text-xl font-semibold leading-6 text-gray-900">
              Edit Product User
            </h3>
        </div>
        <div class="mx-5 md:mx-3 md:col-span-2 px-5 py-3" id="productEditForm">         
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

            </div>
        </div>
        </div>  
`;
    },

    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();

      const product = await BarterifyDbSource.UserProductDetail(url.id);
      console.log(product);
      const productContainer = document.getElementById('productEditForm');
      productContainer.innerHTML += createProductEditFormTemplate(product);

      const categories = await BarterifyDbSource.GetCategories();
      const categoriesOptions = document.getElementById('product-edit-category');
      categories.data.forEach((category) =>{
        categoriesOptions.innerHTML += createCategoriesTemplate(category);
      });

      document.getElementById('editProductSubmit').addEventListener('click', async (e) => {
        e.preventDefault();
        const data = await BarterifyDbSource.productEdit({
          id: document.getElementById('id').value,
          image: document.getElementById('product-edit-image').value,
          name: document.getElementById('name').value,
          price: document.getElementById('price').value,
          category: document.getElementById('product-edit-category').value,
          dateOfPurchase: document.getElementById('date-of-purchase').value,
          description: document.getElementById('description').value,
          location: document.getElementById('location').value,
        });
        console.log(data);
        if (data.error) {
          showMessage(data.error);
        } else {
          showMessage('Product berhasil di update');
          redirectUserProductEdit();
          window.location.reload();
        }
      });
    },
};

export default UserProductEdit;