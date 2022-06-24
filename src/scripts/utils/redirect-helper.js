const redirectUserLogin = () => {
  document.location.hash = '/home';
};

const redirectUserRegister = () => {
  window.location.reload();
};

const redirectUserProfile = () => {
  document.location.hash = '/profile-edit';
};

const redirectUserProfileEdit = () => {
  document.location.hash = '/profile';
};

const redirectInventory = () => {
  document.location.hash = '/inventory';
};

const redirectUserProductEdit = () => {
  document.location.hash = `/userproducts/${sessionStorage.getItem('productId')}`;
};

const redirectWishlist = () => {
  document.location.hash = '/wishlist';
};

export {
  redirectUserLogin,
  redirectUserRegister,
  redirectUserProfile,
  redirectUserProfileEdit,
  redirectInventory,
  redirectUserProductEdit,
  redirectWishlist,
};
