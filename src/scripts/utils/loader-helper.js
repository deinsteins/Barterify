const LoaderInitiator = {
  showLoader() {
    document.getElementById('loader-container').classList.remove('hide');
  },

  closeLoader() {
    document.getElementById('loader-container').classList.add('hide');
  },
};

export default LoaderInitiator;
