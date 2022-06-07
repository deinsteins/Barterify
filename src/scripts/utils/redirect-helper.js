const redirectUserLogin = () => {
      document.location.hash = '/home';
  };

const redirectUserRegister = () => {
    window.location.reload();
};

  export { redirectUserLogin, redirectUserRegister };