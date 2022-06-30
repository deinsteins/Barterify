/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import io from 'socket.io-client';
import Swal from 'sweetalert2';

const Chat = {
  async render() {
    const header = document.querySelector('header');
    header.style.display = 'none';
    const footer = document.querySelector('footer');
    footer.style.display = 'none';
    return `
    <div class="navbar">     
    <div class="user-name"> 
        <span id="public"><marquee>Selamat datang di ruang chat publik silahkan bernegosiasi, promosi, ataupun mengobrol dengan sopan</marquee></span> 
    </div>
</div>
    <div class="cointainer">

        <div class="reciptants">
        <div class="public-chat">
            <div class="client">
            <div class="client-name">
                <span id="myName">
        
            </span>
        </div>
            </div>
        </div>
        <div class="leave-chat">  
        <div class="button render-animation">
            <a href="" onclick="javascript:window.close();"> Leave Chat  </a> 
        </div>
        </div>
        </div>
        
        <div class="messages-block">    
            <div class="messages" id="public_messages">                    
            </div>                      
            
            <div class="message-input">
            <input id="messageInput" type="text">
                <button class="send_button" id="public_message_send"> <img src="/send-plane-2-fill.svg" alt="" srcset=""></div></button>
            </div>
        </div>
    </div>

    `;
  },

  async afterRender() {
    const socket = io('https://barterify-api.herokuapp.com');
    const messageContainer = document.querySelector('.messages');
    const userName = localStorage.getItem('username').replaceAll('"', '');
    if (userName) {
      socket.emit('new-user-joined', userName);
      const myName = document.getElementById('myName');
      myName.innerText = userName.toUpperCase();
    }

    // FUNCTION TO DISPLAY ALL THE MESSAGES AND NOTIFICATIONS
    const append = (data, position) => {
      const messageElement = document.createElement('div');
      messageElement.className += 'message ';
      messageElement.className += position;
      const spansection = document.createElement('span');
      spansection.innerText = data;
      // CREATING NOTIFICATION OF NEW USER
      if (position === 'joined') {
        spansection.innerText = `${data.joinedUserName} joined the chat.`;
      } else if (position === 'received') {
        spansection.innerText = data.message_received;
        messageElement.setAttribute('id', `${data.senderId}`);
        messageElement.style.setProperty('--sender_name', `"${data.senderName}"`);
      } else if (position === 'left') {
        spansection.innerText = `${data.leftUserName} left the chat.`;
      }
      // APPENDING ALL THE EVENTS IN MESSAGE COINTAINER
      messageElement.appendChild(spansection);
      messageContainer.append(messageElement);
    };

    // FUNCTION TO SEND MESSAGE DATA TO OTHER USER
    function sendMessage(toUser) {
      if (toUser === 'public') {
        if (userName) {
          const messageSended = document.getElementById('messageInput').value;
          if (messageSended) {
            socket.emit('message-sended', messageSended);
            append(messageSended, 'sended');
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Silahkan ketik pesan terlebih dahulu',
            });
          }
          document.getElementById('messageInput').value = '';
        } else {
          location.reload();
        }
      } else {
        location.reload();
      }
    }

    // FUNCTION TO INFORM NEW USER AND ADDING IT IN ACTIVE USERS LIST
    socket.on('user-joined', (data) => {
      append({ joinedUserName: data.newUserName, joinedUserId: data.newUserId }, 'joined');
    });
    // FUNCTION TO RECEIVE NEW MESSAGE
    socket.on('message-received', (data) => {
      if (userName) {
        append({ message_received: data.message, senderName: data.senderName, senderId: data.senderId }, 'received');
      } else {
        location.reload();
      }
    });

    // FUNCTION TO INFORM LEFT USER
    socket.on('user-left', (data) => {
      append({ leftUserId: data.leftUserId, leftUserName: data.leftUserName }, 'left');
    });

    document.querySelector('.send_button').addEventListener(('click'), async () => {
      sendMessage('public');
    });
  },
};

export default Chat;
