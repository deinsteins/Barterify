const showMessage = (message, callback) => {
    document.getElementById('message-overlay').innerHTML = `
    <div>
      <div id="message-overlay-content">${message}</div>
      <button id="message-overlay-close-button">OK</button>
    </div>
    `;
    document.getElementById('message-overlay').classList.add('active');
    document
      .getElementById('message-overlay-close-button')
      .addEventListener('click', () => {
        document.getElementById('message-overlay').classList.remove('active');
        if (callback) {
          callback();
        }
      });
  };

  export default showMessage;