import Home from "../views/pages/home";
import LoginRegister from "../views/pages/loginRegister";
import UserProfile from "../views/pages/userProfile";
import UserProfileEdit from "../views/pages/userProfileEdit";
import About from "../views/pages/about";
import Inventory from "../views/pages/inventory";
import addProduct from "../views/pages/addProduct";
import productDetail from "../views/pages/productDetail";

const routes = {
  '/': Home,
  '/home': Home,
  '/login-register': LoginRegister,
  '/about': About,
  '/profile': UserProfile,
  '/profile-edit': UserProfileEdit,
  '/inventory': Inventory,
  '/product': addProduct,
  '/products/:id': productDetail,
};

export default routes;
