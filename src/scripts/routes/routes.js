import Home from "../views/pages/home";
import LoginRegister from "../views/pages/loginRegister";
import UserProfile from "../views/pages/userProfile";
import UserProfileEdit from "../views/pages/userProfileEdit";
import About from "../views/pages/about";

const routes = {
  '/': Home,
  '/home': Home,
  '/login-register': LoginRegister,
  '/about': About,
  '/profile': UserProfile,
  '/profile-edit': UserProfileEdit,
};

export default routes;
