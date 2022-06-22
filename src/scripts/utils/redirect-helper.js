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
  window.location.reload();
};

const redirectUserProductEdit = () => {
  document.location.hash = `/userproducts/${sessionStorage.getItem('productId')}`;
  window.location.reload();
};

export {
  redirectUserLogin,
  redirectUserRegister,
  redirectUserProfile,
  redirectUserProfileEdit,
  redirectInventory,
  redirectUserProductEdit,
};
