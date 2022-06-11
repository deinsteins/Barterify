import Home from "../views/pages/home";
import LoginRegister from "../views/pages/loginRegister";
import UserProfile from "../views/pages/userProfile";
import UserProfileEdit from "../views/pages/userProfileEdit";
import About from "../views/pages/about";
import InformationPage from "../views/pages/informationPage";
import Inventory from "../views/pages/inventory";
import addProduct from "../views/pages/addProduct";
import productDetail from "../views/pages/productDetail";
import userProductDetail from "../views/pages/UserProductDetail";
import UserProductEdit from "../views/pages/userProductEdit";

const routes = {
  '/': Home,
  '/home': Home,
  '/login-register': LoginRegister,
  '/about': About,
  '/profile': UserProfile,
  '/profile-edit': UserProfileEdit,
  '/information-page': InformationPage,
  '/inventory': Inventory,
  '/product': addProduct,
  '/products/:id': productDetail,
  '/userproducts/:id': userProductDetail,
  '/product-edit/:id' : UserProductEdit,
};

export default routes;
