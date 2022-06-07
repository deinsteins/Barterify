import Home from "../views/pages/home";
import LoginRegister from "../views/pages/loginRegister";
import UserProfile from "../views/pages/userProfile";
import UserProfileEdit from "../views/pages/userProfileEdit";

const routes = {
  '/': Home,
  '/home': Home,
  '/login-register': LoginRegister,
  '/profile': UserProfile,
  '/profile-edit': UserProfileEdit,
};

export default routes;
